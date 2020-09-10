import { Component, OnInit, ChangeDetectionStrategy, DoCheck } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerComponent implements OnInit, DoCheck {

  counter = 0;
  message = '';

  constructor() { }

  ngOnInit(): void {}

  ngDoCheck(): void {
    console.log('customer checked');
  }

}
