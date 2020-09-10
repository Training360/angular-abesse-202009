import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { OrderComponent } from './page/order/order.component';
import { CustomerComponent } from './page/customer/customer.component';
import { OrderEditComponent } from './page/order-edit/order-edit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'orders',
    component: OrderComponent,
  },
  {
    path: 'orders/edit/:id',
    component: OrderEditComponent,
  },
  {
    path: 'customers',
    component: CustomerComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
