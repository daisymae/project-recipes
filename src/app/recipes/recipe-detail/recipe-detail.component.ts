import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  detailedRecipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.detailedRecipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.detailedRecipe.ingredients);
  }
}
