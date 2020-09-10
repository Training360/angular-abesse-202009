import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, DoCheck } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { ConfigService } from 'src/app/service/config.service';
import { Order } from 'src/app/model/order';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent implements OnInit {

  cols = this.config.orderTable;
  list: Order[] = [];
  list$: Observable<Order | Order[]> = this.orderService.currentList$.pipe(
    tap( orders => console.log(orders) ),
    map( orders => (orders as Order[]).filter( i => i.price > 10000) ),
    tap( orders => console.log(orders) )
  );
  key = '';
  phrase = '';

  constructor(
    private orderService: OrderService,
    private config: ConfigService,
    private cd: ChangeDetectorRef,
    private router: Router,
  ) { }

  onEdit(order: Order): void {
    this.router.navigate(['orders', 'edit', order.id]);
  }

  ngOnInit(): void {
    this.orderService.read().subscribe( () => {} );
    /* this.cd.detach();
    setInterval( () => {
      this.cd.detectChanges();
    }, 5000); */
    /* this.orderService.read().subscribe(
      orders => this.list = (orders as Order[]),
      error => console.error(error),
      () => console.log('completed')
    ); */
  }

  onDelete(order: Order): void {
    this.orderService.delete(order).subscribe(
      response => alert(`A ${order.name} törlésre került.`),
      err => alert(`Hiba a törlés során!`)
    );
  }
}
