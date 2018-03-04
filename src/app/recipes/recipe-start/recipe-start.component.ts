import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent implements OnInit {
recipe:Recipe ;
  constructor() { }

  ngOnInit() {
    this.recipe= new Recipe('Chicken Winges ','Place chicken in an 11 × 7-inch baking dish coated with cooking spray. Spoon salsa evenly over chicken; top with green onions. Sprinkle with cheese.','https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg',10,
    [
      new  Ingredient('strewberry' , 50) ,
      new  Ingredient('strewberry' , 50)
   ]
  )
  }

}
