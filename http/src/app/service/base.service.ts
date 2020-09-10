import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ConfigService } from './config.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T extends TWithID> {

  entityName = '';
  currentList$: BehaviorSubject<T[]> = new BehaviorSubject([]);

  constructor(
    public http: HttpClient,
    public config: ConfigService,
  ) { }

  // Read data from the database.
  read(id?: number): Observable<T | T[]> {
    return this.http.get<T>(
      `${this.config.apiUrl}${this.entityName}/${id ? id : ''}`
    ).pipe(
      tap( list => this.currentList$.next( (list as T[]) ) )
    );
  }

  // Update an entity.
  update(entity: T): Observable<any> {
    return this.http.put(
      `${this.config.apiUrl}${this.entityName}/${entity.id}`,
      entity
    ).pipe(
      tap( () => this.read().subscribe( () => {} ) )
    );
  }

  delete(entity: T): Observable<any> {
    return this.http.delete(
      `${this.config.apiUrl}${this.entityName}/${entity.id}`
    ).pipe(
      tap( () => this.read().subscribe( () => {} ) )
    );
  }

}

interface TWithID {
  id: number;
}
