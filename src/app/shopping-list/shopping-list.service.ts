
import {Ingredient} from '../shared/ingredient-modul';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService{
  ingredientChange = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients : Ingredient[]=[
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor(){

  }

  getIngredients(){
      return this.ingredients.slice();
  }

  getIngredient(index : number){
    return this.ingredients[index];
  }

  addIngredient(newIngredient : Ingredient){
      this.ingredients.push(newIngredient);
      this.ingredientChange.next(this.ingredients.slice());
  }

  addIngredients(newIngredients : Ingredient[]){
    this.ingredients.push(...newIngredients);
    this.ingredientChange.next(this.ingredients.slice());
  }

  updateIngredient(index : number, ingredient : Ingredient){
    this.ingredients[index] = new Ingredient(ingredient.name, ingredient.amount);
    this.ingredientChange.next(this.ingredients.slice());
  }

  deleteIngredient(index : number){
    this.ingredients.splice(index, 1);
    this.ingredientChange.next(this.ingredients.slice());
  }
}