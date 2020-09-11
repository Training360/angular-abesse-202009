import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = 'http://localhost:3000/login';
  logoutUrl = 'http://localhost:3000/logout';

  currentUserSubject: BehaviorSubject<User> = new BehaviorSubject(null);
  lastToken: string = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
  ) {
    const localUser = localStorage.getItem('currentUser');
    this.currentUserSubject.next( localUser ? JSON.parse(localUser) : null );
  }

  login(loginData: User): Observable<{accessToken: string}> {
    return this.http.post<{accessToken: string}>(
      this.loginUrl,
      { email: loginData.email, password: loginData.password }
    ).pipe(
      switchMap( response => {
        if (response.accessToken) {
          this.lastToken = response.accessToken;
          return this.userService.query(`email=${loginData.email}`);
        }
        return of(null);
      })).pipe(
        tap( user => {
          if (!user) {
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null);
          } else {
            user[0].token = this.lastToken;
            localStorage.setItem('currentUser', JSON.stringify(user[0]));
            this.currentUserSubject.next(user[0]);
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['login']);
  }

}
