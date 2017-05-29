import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredient-modul';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private shoppingListSubscription : Subscription;
  ingredients : Ingredient[];
  constructor(private shoppingList : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingList.getIngredients();
    this.shoppingListSubscription=this.shoppingList.ingredientChange.subscribe(
      (ingredientse : Ingredient[]) => {
        this.ingredients=ingredientse;
      }
    );
    
  }

  ngOnDestroy(){
    this.shoppingListSubscription.unsubscribe();
  }

  onEditItem(index : number){
    this.shoppingList.startedEditing.next(index);
  }

}
