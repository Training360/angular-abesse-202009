import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Order } from '../model/order';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService<Order> {

  constructor(
    public http: HttpClient,
    public config: ConfigService,
  ) {
    super(http, config);
    this.entityName = 'order';
  }
}
