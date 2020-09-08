import { Component } from '@angular/core';
import { Hero } from './model/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Abesse Angular';
  counter = 0;
  heroes: Hero[] = [
    {name: 'Bombasto', address: 'New York', superpower: 'explode'},
    {name: 'Superman', address: 'New York', superpower: 'fly'},
    {name: 'Lex Lutor', address: 'New York', superpower: 'nothing'},
  ];

  constructor() {
    setInterval( () => {
      this.counter++;
    }, 1000);
  }

  onUserClick(clickEvent: MouseEvent): void {
    clickEvent.preventDefault();
    alert('Clicked.');
  }

  /* 1. title = 'Abesse Angular', és jelenjen meg a Jumbotronban címként.
  2. A Jumbotron gombban legyen egy számláló.
  3. alert('...'); Jelenjen meg, ha a gombra kattintanak. */


}
