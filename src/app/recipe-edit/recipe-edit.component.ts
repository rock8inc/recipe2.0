import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../recipe/recipe.service";
import {Recipe} from "../domain/recipe";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
  providers: []
})


export class RecipeEditComponent implements OnInit {
  private recipe;
  private recipe_orig;
  private categories;

  constructor(private recipeService:RecipeService, private router:Router) { }

  getRecipe() {
    this.recipe = Object.assign({}, this.recipeService.getSelected());
    //return this.recipeService.getSelected().then(recipe => this.recipe = recipe);
  }

  getCats() {
    return this.recipeService.getCategories().then(cats => this.categories = cats);
  }
  cancelUpdate() {
    console.log(this.recipe + ' - '  + this.recipe_orig);
    this.recipe = Object.assign({}, this.recipe_orig);
    this.router.navigate(['']);
  }

  delete() {
    this.recipeService.delete(this.recipe._id);
    this.router.navigate(['']);
  }

  update() {
    console.log(this.recipe + ' - '  + this.recipe_orig);
    this.recipeService.put(this.recipe);
    this.router.navigate(['']);
  }

  ngOnInit() {
    this.getRecipe();
    this.recipe_orig = Object.assign({}, this.recipe);
    this.getCats();
  }

}
