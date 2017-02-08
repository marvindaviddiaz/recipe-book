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


  recipes: Recipe[] = [
    new Recipe("Salad", "Salad", "http://www.thegoodburger.com/wp-content/uploads/2014/10/huerta.png", []),
    new Recipe("Fish", "Fish", "http://www.clipartkid.com/images/769/displaying-19-images-for-clipart-cooked-fish-8kmQOY-clipart.jpg", [])];

  //Is not the best
  @Output() recipeSelected = new EventEmitter<Recipe>();

  onSelected(selected: Recipe) {
    this.recipeSelected.emit(selected);
  }



}
