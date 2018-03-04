import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient} from '../../shared/ingredient.model';
import {RecipeService} from './../recipe.service';
import { ShoppingListService} from '../../shopping-list/shopping-list.service';
import { ActivatedRoute , Router , Params  } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipe:Recipe;
expandValue = false;
counter :number = 0;
id:number;
constructor(private recipeService:RecipeService,private shoppingListService:ShoppingListService , private route:ActivatedRoute, private router:Router){}
  ngOnInit() {
   this.route.params.subscribe( (params : Params) => {
     this.id=  +params['id'];
      this.recipe=this.recipeService.getRecipeId(this.id);
   } );
   }
AddToIngredient(ingredients: Ingredient[]){
this.shoppingListService.AddToIngredient(ingredients);
}
  expand(){
    this.counter++;
    if(this.counter%2 !==0){
          this.expandValue=true;
    }
    else{
          this.expandValue=false;
    }
  }
  onEditRecipe(){
    this.router.navigate(['edit'] , {relativeTo:this.route})
  }
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
  }
}
