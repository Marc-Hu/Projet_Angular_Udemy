import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { Recipe } from '../recipes-model';
import {RecipeService} from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[];

  constructor(private recipeService : RecipeService,
              private router : Router,
              private routes : ActivatedRoute) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }

  onNewClick(){
    this.router.navigate( ['new'], {relativeTo : this.routes} );
  }
}
