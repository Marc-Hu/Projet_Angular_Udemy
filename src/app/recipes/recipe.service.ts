import {Recipe} from './recipes-model';
// import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient-modul';

export class RecipeService {
    // recipeSelected = new EventEmitter<Recipe>();
    private recipes : Recipe[]=[
    new Recipe('Rumsteak', 
    'Rumsteak accompagné de pomme de terre', 
    'http://www.trakyaninsesi.com/files/news/default/yemeklerde-domuz-eti-ve-alkol-testi347fbc49c8314d6c2ca3.jpg',
    [
        new Ingredient("Viande", 1),
        new Ingredient("Pomme de terre", 3),
        new Ingredient("Citron", 1),
        new Ingredient("Aubergine", 1)

    ]),
    new Recipe('Riz cantonais', 
    'Riz Sautée à la Cantonaise', 
    'https://www.gerble-sans-gluten.com/share/recette/img_big/138.jpg',
    [
        new Ingredient("Riz", 1),
        new Ingredient("Petit pois", 10),
        new Ingredient("Oeuf", 1),
        new Ingredient("Jambon", 10)

    ])
  ];

  getRecipes(){
      return this.recipes.slice();
  }

  getRecipe(index : number){
      return this.recipes[index];
  }
}