import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes: Hero[] = [
    {name: 'Bombasto', address: 'New York', superpower: 'explode'},
    {name: 'Superman', address: 'New York', superpower: 'fly'},
    {name: 'Lex Lutor', address: 'New York', superpower: 'nothing'},
    {name: 'Lex Lutor', address: 'New York', superpower: 'nothing'},
    {name: 'Lex Lutor', address: 'New York', superpower: 'nothing'},
  ];

  constructor() { }
}
