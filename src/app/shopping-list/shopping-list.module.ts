
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { ShoppingListComponent } from './shopping-list.component';
import { shoppingListRouting } from './shopping-list.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListAddComponent,
  ],
  imports: [FormsModule, CommonModule, shoppingListRouting]
})
export class ShoppingListModule { }
