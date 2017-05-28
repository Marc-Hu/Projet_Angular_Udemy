import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {RecipeService} from '../recipe.service';
import {Ingredient} from '../../shared/ingredient-modul';
import {Recipe} from '../recipes-model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe : Recipe;
  id : number;

  constructor(private shoppingList : ShoppingListService,
              private recipeService : RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params : Params)=>{
        this.id=+params['id'];
        this.recipe=this.recipeService.getRecipe(this.id);
      }   
    );
  }

  addIngredient(){
    this.shoppingList.addIngredients(this.recipe.ingredients);
  }
}
