import {Ingredient} from '../shared/ingredient-modul';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService{
  ingredientChange = new Subject<Ingredient[]>();
  private ingredients : Ingredient[]=[
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor(){

  }

  getIngredients(){
      return this.ingredients.slice();
  }

  addIngredient(newIngredient : Ingredient){
      this.ingredients.push(newIngredient);
      this.ingredientChange.next(this.ingredients.slice());
  }

  addIngredients(newIngredients : Ingredient[]){
    this.ingredients.push(...newIngredients);
    this.ingredientChange.next(this.ingredients.slice());
  }
}