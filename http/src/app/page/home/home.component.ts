import { Component, OnInit } from '@angular/core';
import { interval, zip, combineLatest } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const i1 = interval(1000);
    const i2 = interval(5000);
    const i3 = interval(10000);

    combineLatest([i1, i2, i3]).subscribe(
      list => console.log(list)
    );




  }

}
