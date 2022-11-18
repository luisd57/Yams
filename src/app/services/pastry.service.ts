import { Injectable } from '@angular/core';
import { INGREDIENTS_LISTS, PASTRIES } from '../data/mock-pastries';
import { List } from '../interfaces/list';
import { Pastry } from '../interfaces/pastry';

@Injectable({
  providedIn: 'root'
})
export class PastryService {

  private pastries: Pastry[] = PASTRIES;
  private ingredientsList: List[] = INGREDIENTS_LISTS;

  constructor() { }

  getPastries(): Pastry[] {
    return this.pastries;
    // return this.pastries.sort(
    //   (a, b) => { return b.quantity - a.quantity }
    // );
  }

  getPastry(id: string): Pastry | undefined {
    return this.pastries.find(pastry => pastry.id === id);
  }

  getPastryIngredientList(id: string): List | undefined {
    return this.ingredientsList.find(list => list.id === id);
  }



}
