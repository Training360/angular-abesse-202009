import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { ConfigService } from 'src/app/service/config.service';
import { Order } from 'src/app/model/order';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  cols = this.config.orderTable;
  list: Order[] = [];
  list$: Observable<Order | Order[]> = this.orderService.read().pipe(
    tap( orders => console.log(orders) ),
    map( orders => (orders as Order[]).filter( i => i.price > 10000) ),
    tap( orders => console.log(orders) )
  );
  key = '';
  phrase = '';

  constructor(
    private orderService: OrderService,
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
    /* this.orderService.read().subscribe(
      orders => this.list = (orders as Order[]),
      error => console.error(error),
      () => console.log('completed')
    ); */
  }

}
