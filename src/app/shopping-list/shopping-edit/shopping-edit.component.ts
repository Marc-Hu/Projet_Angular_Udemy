import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';

import {Ingredient} from '../../shared/ingredient-modul';
import {ShoppingListService} from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
  constructor(private shoppingList : ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    const newAmount = this.amountInputRef.nativeElement.value;
    const newName = this.nameInputRef.nativeElement.value;
    const newIngredient = new Ingredient(newName, newAmount);
    this.shoppingList.addIngredient(newIngredient);
  }

}
