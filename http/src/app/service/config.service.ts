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

  orderTable: {title: string, key: string, type?: string, pattern?: string}[] = [
    {title: 'Name', key: 'name', pattern: `[A-Űa-ű\\- ]{5,30}`},
    {title: 'Price', key: 'price', type: 'number'},
    {title: 'Quantity', key: 'quantity', type: 'number'},
    {title: 'Man.', key: 'manufacturer'},
    {title: 'Cat.', key: 'category'},
  ];

  constructor() { }
}
