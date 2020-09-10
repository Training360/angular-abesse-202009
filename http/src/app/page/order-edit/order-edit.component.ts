import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { Order } from 'src/app/model/order';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit, OnDestroy {

  order$ = this.ar.params.pipe(
    switchMap( params => this.orderService.read(params.id) )
  );
  orderSubscription: Subscription;
  fieldList = this.config.orderTable;

  constructor(
    private ar: ActivatedRoute,
    private orderService: OrderService,
    private config: ConfigService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    /* this.orderSubscription = this.id$.subscribe(
      order => console.log(order)
    ); */
  }

  ngOnDestroy(): void {
    // this.orderSubscription.unsubscribe();
  }

  onUpdate(ngform: NgForm, order: Order): void {
    this.orderService.update(order).subscribe(
      response => this.router.navigate(['orders']),
      err => console.error(err),
      () => console.log('ennek vége')
    );
  }

}
