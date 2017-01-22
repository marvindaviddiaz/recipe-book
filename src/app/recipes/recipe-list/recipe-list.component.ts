import { Component, OnInit } from '@angular/core';
//import { RecipeItemComponent } from './recipe-item.component';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  recipe: Recipe = new Recipe("Dummy", "Dummy", "https://www.economiapersonal.com.ar/wp-content/uploads/2014/07/Default-03.png");
  
  
  constructor() { }

  ngOnInit() {
  }

}
