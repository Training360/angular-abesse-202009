import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient,
  ) { }

  query(queryString: string): Observable<User | User[]> {
    const url = `${this.usersUrl}?${queryString}`;
    return this.http.get<User | User[]>(url);
  }
}
