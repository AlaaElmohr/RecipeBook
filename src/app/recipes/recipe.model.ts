import { Ingredient } from '../shared/ingredient.model'
export class Recipe {

  public name:string;
  public description:string;
  public imagePath:string;
  public price:number;
  public ingredients : Ingredient [];
   constructor(name:string,dec:string,image:string,price:number,ingredients: Ingredient[] ){

      this.name=name;
      this.description=dec;
      this.imagePath=image;
      this.price=price;
      this.ingredients=ingredients
   }
}
