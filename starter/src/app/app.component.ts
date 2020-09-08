import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'starter';
  counter = 0;
  htmlElementClass = 'active';
  birthDate = '1980-12-25';

  constructor() {
    setInterval( () => {
      this.counter++;
    }, 1000);
  }

  changeTitle(): void {
    this.title = 'Changed!';
  }

}
