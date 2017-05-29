import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription'
import {Ingredient} from '../../shared/ingredient-modul';
import {ShoppingListService} from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild ('f') shoppingListForm : NgForm;
  subscription : Subscription;
  editMode = false;
  editingIndex : number;
  editingItem : Ingredient
  constructor(private shoppingList : ShoppingListService) { }

  ngOnInit() {
    this.subscription=this.shoppingList.startedEditing.subscribe(
      (index : number) => {
        this.editingIndex=index;
        this.editMode=true;
        this.editingItem=this.shoppingList.getIngredient(index);
        this.shoppingListForm.setValue({
          'name':this.editingItem.name,
          'amount':this.editingItem.amount
        })
      }
    );
  }

  onSubmit(form : NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.shoppingList.updateIngredient(this.editingIndex, newIngredient);
    } else {
    this.shoppingList.addIngredient(newIngredient);
  }
  this.editMode=false;
  form.reset();
  }

  onClear(){
    this.shoppingListForm.reset();
    this.editMode=false;
  }

  onDelete(){
    this.shoppingList.deleteIngredient(this.editingIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
