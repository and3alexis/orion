import { Injectable } from '@angular/core';
import { Hero } from './dto/hero';
import { HEROES } from './dto/mock-heroes';

@Injectable()
export class HeroServiceService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

}
