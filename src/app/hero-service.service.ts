import { Injectable } from '@angular/core';
import { Hero } from './dto/hero';
import { HEROES } from './dto/mock-heroes';

@Injectable()
export class HeroServiceService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

}
