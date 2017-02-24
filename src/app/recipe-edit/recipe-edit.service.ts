import { Injectable } from '@angular/core';
import {Recipe} from "../domain/recipe";

@Injectable()
export class RecipeEditService {
  recipe: Recipe;
  constructor(recipe:Recipe) {
    this.recipe = recipe;
  }

}
