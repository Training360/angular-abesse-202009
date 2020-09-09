import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  routerLinks: {label: string, link: string}[] = [
    {label: 'Home', link: '/'},
    {label: 'Orders', link: '/orders'},
    {label: 'Customers', link: '/customers'},
  ];

  apiUrl = 'http://localhost:3000/';

  orderTable: {title: string, key: string}[] = [
    {title: 'Name', key: 'name'},
    {title: 'Price', key: 'price'},
    {title: 'Quantity', key: 'quantity'},
    {title: 'Man.', key: 'manufacturer'},
    {title: 'Cat.', key: 'category'},
  ];

  constructor() { }
}
