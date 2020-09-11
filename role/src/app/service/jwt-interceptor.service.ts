import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authService.currentUserSubject.value;
    if (this.authService.lastToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.lastToken}`
        }
      });
    }

    return next.handle(request);
  }
}
