import { Ingredient } from '../shared/ingredient';
import { Recipe } from './recipe';
import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RecipeService {

  recipesChanged = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe("Salad", "Salad", "http://www.thegoodburger.com/wp-content/uploads/2014/10/huerta.png",
      [
        new Ingredient('French Fries', 2),
        new Ingredient('Pork Meat', 1),
      ]),
    new Recipe("Fish", "Fish", "http://images.media-allrecipes.com/userphotos/250x250/01/01/72/1017268.jpg", [])
  ];


  constructor(private http: Http) { }

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

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-a1592.firebaseio.com/recipes.json', body, { headers: headers })
  }

  fetchData() {
    return this.http.get('https://recipebook-a1592.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
      (data: Recipe[]) => {
        this.recipes = data;
        this.recipesChanged.emit(this.recipes);
      }
      );
  }

}
