import { Injectable } from '@angular/core';
import {RecipeModel} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: RecipeModel[] = [
    { id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://image.shutterstock.com/image-photo/homemade-breaded-german-weiner-schnitzel-600w-1179450070.jpg',
      ingredients:['French fries', 'Pork meat', 'Salad']

    },
    { id: 'r2',
      title: 'french toast',
      imageUrl: 'https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/mccormick/q/2000/quick_and_easy_french_toast_new_2000x1125.jpg?vd=20191111T152517Z&hash=83D9008FC4E0388298124DE9EDF450224905012E',
      ingredients:['bread', 'eggs', 'cream']

    }
  ];

  constructor() { };

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};

  }
}
