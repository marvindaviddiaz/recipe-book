import { Component, OnInit, EventEmitter, Output } from '@angular/core';
//import { RecipeItemComponent } from './recipe-item.component';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  ngOnInit() { }


  recipes: Recipe[] = [];
  recipe: Recipe = new Recipe("Dummy", "Dummy", "https://www.economiapersonal.com.ar/wp-content/uploads/2014/07/Default-03.png");

  //Is not the best
  @Output() recipeSelected = new EventEmitter<Recipe>();

  onSelected(selected: Recipe) {
    this.recipeSelected.emit(selected);
  }



}
