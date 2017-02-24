import { Injectable } from '@angular/core';
import {Recipe} from "../domain/recipe";

let recipes1 = [
  {_id: 1, name: 'Split Pea Soup', shoppingList: true},
  {_id: 2, name: 'Melt in your Mouth Chicken', shoppingList: false},
  {_id: 3, name: 'Tacos', shoppingList: false},
  {_id: 4, name: 'Meatloaf', shoppingList: false}
]
let categories1 = [ 'Beef', 'Chicken', 'Fish', 'Other', 'Pork' ];
@Injectable()
export class RecipeService {
  recipes: Recipe[];
  recipe: Recipe;
  categories: string[];

  constructor() {
    this.recipes = recipes1 as Recipe[];
    this.categories = categories1;
    // this.recipes = [
    //   {_id: 1, name: 'Split Pea Soup', shoppingList: true},
    //   {_id: 2, name: 'Melt in your Mouth Chicken', shoppingList: false},
    //   {_id: 3, name: 'Tacos', shoppingList: false},
    //   {_id: 4, name: 'Meatloaf', shoppingList: false}
    //   ] as Recipe[];
  }

  get() {
    return new Promise(resolve => resolve(this.recipes));
  }

  add(data) {
    return new Promise(resolve => {
      this.recipes.push(data);
      resolve(data);
    });
  }

  put(data) {
    return new Promise(resolve => {
      let index = this.recipes.findIndex(recipe => recipe._id === data._id);
      this.recipes[index] = data;
      resolve(data);
    });
  }

  getId(id) {
    let index = this.recipes.findIndex(recipe => recipe._id === id);
    return this.recipes[index];

  }

  selectCurrent(data) {
    return new Promise(resolve => {
      this.recipe = data;
      console.log(this.recipe.name + this.recipe._id);
      resolve(true);
    })
  }

  getSelected() {
    console.log(this.recipe.name + '-get')
    return this.recipe;
    // return new Promise(resolve => {
    //   resolve(this.recipe);
    //   console.log(this.recipe.name + '-get')
    // });
  }

  delete(id) {
    return new Promise(resolve => {
      let index = this.recipes.findIndex(recipe => recipe._id === id);
      this.recipes.splice(index, 1);
      resolve(true);
    })
  }

  getCategories() {
    return new Promise(resolve => resolve(this.categories));
  }

}
