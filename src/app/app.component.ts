import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RecipeService } from './recipes/recipe.service';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styles: [],
  providers: [RecipeService]
})
export class AppComponent {

}
