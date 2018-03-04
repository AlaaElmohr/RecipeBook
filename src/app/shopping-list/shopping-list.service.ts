import { Injectable } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class ShoppingListService {
selectedValue =new Subject<number>();
  ingredients :Ingredient[]=[
   new Ingredient('apple',4),
    new Ingredient('orange',5),
    new Ingredient('banana',9),
    new Ingredient('limon',2),
  ];
  constructor() { }

addIngredient(ingredient :Ingredient ){
this.ingredients.push(ingredient);
}
getIngredient(){
  return this.ingredients;
}
getIngredientId(index:number){
  return this.ingredients[index];
}
AddToIngredient(ingredients :Ingredient[]){
 for(let ingredient of ingredients ){
   this.ingredients.push(ingredient);
 }
}
editIngredient(index:number,ingredient:Ingredient){
this.ingredients[index]=ingredient;
}
deleteIngredient(index:number){
  this.ingredients.splice(index,1);
}
sendIngredients(ingredients: Ingredient[]){
 for (let ing of  ingredients){
   console.log('service' + ing);
     this.ingredients.push(ing);
 }
}
}
