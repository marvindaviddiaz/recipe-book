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
    new Recipe("Fish", "Fish", "http://images.media-allrecipes.com/userphotos/250x250/01/01/72/1017268.jpg", [])
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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

}
