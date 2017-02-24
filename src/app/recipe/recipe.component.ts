import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: []
})
export class RecipeComponent implements OnInit {
  private recipes;
  private slCount;
  private newRecipe;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  getRecipes() {
    return this.recipeService.get().then(recipes => {
      this.recipes = recipes;
      this.getCount();
    });
  }

  getCount() {
    this.slCount = this.recipes.filter(recipe => recipe.shoppingList).length;
  }

  addRecipe(){
    this.recipeService.add({name: this.newRecipe, shoppingList: false}).then(() => {
      return this.getRecipes();
    }).then(() => {
      this.newRecipe = ''; //clear input value
      this.router.navigate(['edit']);
    });
  }

  updateRecipe(recipe, newValue) {
    recipe.name = newValue;
    return this.recipeService.put(recipe).then(() => {
      recipe.editing=false;
      return this.getRecipes();
    });
  }

  destroyRecipe(recipe){
    this.recipeService.delete(recipe._id).then(() => {
      return this.getRecipes();
    })
  }

  edit(recipe) {
    this.recipeService.selectCurrent(recipe);
    this.router.navigate(['edit']);
    console.log(recipe.name);
  }

  ngOnInit() {
    // this.route.params.subscribe(params =>{
    //   this.path = params['status'];
      this.getRecipes();
    // })

  }

}
