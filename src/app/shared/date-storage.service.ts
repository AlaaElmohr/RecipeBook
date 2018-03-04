import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';
import {RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { Router , ActivatedRoute} from '@angular/router';
@Injectable()
export class DateStorageService {

  constructor(private router: Router, private route:ActivatedRoute, private http:Http,private recipeService:RecipeService, private authService:AuthService) { }
storeRecipe(){
  const token=this.authService.getToken();
  return this.http.put('https://recipes-c6c35.firebaseio.com/recipes-c6c35.json?auth=' + token,this.recipeService.getRecipe());
}
getRecipe(){
    const token=this.authService.getToken();
  this.http.get('https://recipes-c6c35.firebaseio.com/recipes-c6c35.json?auth=' + token).subscribe( (response:Response) =>{
     const recipes: Recipe[]=response.json();
     this.recipeService.setRecipe(recipes);
  });
}
}
