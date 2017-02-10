import { Ingredient } from '../shared/ingredient'
import { Recipe } from './recipe';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe("Salad", "Salad", "http://www.thegoodburger.com/wp-content/uploads/2014/10/huerta.png",
      [
        new Ingredient('French Fries', 2),
        new Ingredient('Pork Meat', 1),
      ]),
    new Recipe("Fish", "Fish", "http://www.clipartkid.com/images/769/displaying-19-images-for-clipart-cooked-fish-8kmQOY-clipart.jpg", [])
  ];


  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    console.log(recipe);
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
