import { Ingredient } from '../shared/ingredient'
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {

  private items: Ingredient[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  additems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items);
  }

}
