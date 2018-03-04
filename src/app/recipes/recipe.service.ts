import { Injectable , Output ,EventEmitter} from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
@Injectable()
export class RecipeService {
  recipeSelected :Recipe;
  recipes: Recipe[] = [
    new Recipe('Chicken Winges ','Place chicken in an 11 × 7-inch baking dish coated with cooking spray. Spoon salsa evenly over chicken; top with green onions. Sprinkle with cheese.','https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg',10,
    [
      new  Ingredient('strewberry' , 50) ,
      new  Ingredient('strewberry' , 50)
   ]
  ),
    new Recipe('Chef Johns Dark ','This has a pinch of chile pepper as the secret ingredient. It is firm yet unbelievably light and airy. The little bit of chile pepper is in there just to bring out the ','https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg',20,
    [
      new  Ingredient('strewberry' , 50) ,
      new  Ingredient('strewberry' , 50)
   ]),
    new Recipe('Grilled Shrimp ','This is something a little more flavorful for grilling shrimp. This recipe is also delicious brushed onto bacon wrapped shrimp.','https://images.pexels.com/photos/111131/meat-vegetables-gemuesepiess-mushrooms-111131.jpeg',50,
    [
      new  Ingredient('strewberry' , 50) ,
      new  Ingredient('strewberry' , 50)
   ]
  ),
  ];

  constructor() { }
getRecipe(){
   return  this.recipes;
}
addRecipe(recipe:Recipe){
  this.recipes.push(recipe);
}
setRecipe(recipes :Recipe[]){
   this.recipes=recipes;
}
sendSelectedRecipe(recipe:Recipe){
  console.log(recipe);
this.recipeSelected=recipe;
}
getRecipeId(id :number){
  console.log('recipe' + this.recipes[id]);
  return this.recipes[id];
}
updateRecipe(index:number,recipe:Recipe){
   this.recipes[index]=recipe;
}
deleteRecipe(index:number){
   this.recipes.splice(index,1);
}
}
