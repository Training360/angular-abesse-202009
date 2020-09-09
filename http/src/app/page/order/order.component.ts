import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { ConfigService } from 'src/app/service/config.service';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  cols = this.config.orderTable;
  list: Order[] = [];

  constructor(
    private orderService: OrderService,
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
    this.orderService.read().subscribe(
      orders => this.list = (orders as Order[]),
      error => console.error(error),
      () => console.log('completed')
    );
  }

}
