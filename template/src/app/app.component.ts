import { Component } from '@angular/core';
import { Hero } from './model/hero';
import { timeStamp } from 'console';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Abesse Angular';
  counter = 0;
  heroes: Hero[] = this.heroService.heroes;
  phrase = '';
  events = 0;

  constructor(
    private heroService: HeroService,
  ) {
    setInterval( () => {
      this.counter++;
    }, 1000);
  }

  onUserClick(clickEvent: MouseEvent): void {
    clickEvent.preventDefault();
    alert('Clicked.');
  }

  onHeroDelete(hero: Hero): void {
    const index = this.heroes.indexOf(hero);
    this.heroes.splice(index, 1);
    this.events++;
  }

  /* 1. title = 'Abesse Angular', és jelenjen meg a Jumbotronban címként.
  2. A Jumbotron gombban legyen egy számláló.
  3. alert('...'); Jelenjen meg, ha a gombra kattintanak. */


}
