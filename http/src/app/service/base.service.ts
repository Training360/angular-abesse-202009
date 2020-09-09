import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T> {

  entityName = '';

  constructor(
    public http: HttpClient,
    public config: ConfigService,
  ) { }

  // Read data from the database.
  read(id?: number): Observable<T | T[]> {
    return this.http.get<T>(
      `${this.config.apiUrl}${this.entityName}/${id ? id : ''}`
    );
  }
}
