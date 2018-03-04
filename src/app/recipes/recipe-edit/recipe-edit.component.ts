import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute , Router , Params  } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { ShoppingListService} from '../../shopping-list/shopping-list.service';
import { FormGroup,FormControl,FormArray ,Validators} from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model'
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
recipeForm : FormGroup;
id:number;
editMode =false;
editModeAction:string;
constructor( private route:ActivatedRoute,private router:Router,private recipeService:RecipeService,private shoppingListService:ShoppingListService ){}

  ngOnInit() {
    this.route.params.subscribe( (params:Params)=>{
       this.id= +params['id'];
       if(params['id']){
         this.editMode=true;}
        this.initForm();
  });
if(this.editMode){
   this.editModeAction="Edit";
}
else{
  this.editModeAction="Add";
}

}
addIngredient(){
(<FormArray>this.recipeForm.get('ingredients')).push( new FormGroup({
'name':new FormControl(),
'amount' :new FormControl()
}));
}
private initForm(){
  let recipeName= '' ;
  let recipeDescription = '';
  let recipePrice=0;
  let recipeImagePath='';
  let recipeIngredients = new FormArray([]);
  if(this.editMode===true){
    const recipe=this.recipeService.getRecipeId(this.id);
    recipeName=recipe.name;
     recipeDescription=recipe.description;
     recipePrice=recipe.price;
     recipeImagePath=recipe.imagePath;
     for (let ingredient of recipe.ingredients){
       recipeIngredients.push(
         new FormGroup({
           'name' : new FormControl(ingredient.name),
          'amount' :new FormControl(ingredient.amount)
         })
       );
     }
  }
  this.recipeForm = new FormGroup({
     'name' : new FormControl(recipeName,Validators.required),
    'description' :  new FormControl(recipeDescription,Validators.required),
    'imagePath' : new FormControl(recipeImagePath,Validators.required),
    'price' : new FormControl(recipePrice,Validators.required),
    'ingredients' : recipeIngredients
  });
}
submit(){
  const name=this.recipeForm.value['name'];
  const desc=this.recipeForm.value['description'];
  const price=this.recipeForm.value['price'];
  const imagePath=this.recipeForm.value['imagePath'];
    const ingredientss =this.recipeForm.value['ingredients'].slice();
    for( let ingredient of ingredientss){
          console.log(ingredient.name);
    }
  const recipeSend:Recipe = new Recipe(name,desc,imagePath,price,ingredientss);
  //console.log(this.recipeForm.value['ingredients']);
  //this.shoppingListService.sendIngredients(this.recipeForm.value['ingredients']);
  if(this.editMode==true){
     this.recipeService.updateRecipe(this.id,recipeSend);
  }
  else{
    console.log('recipeEdit'+recipeSend);
   this.recipeService.addRecipe(recipeSend);
  }
 this.router.navigate(['recipes']);
}
cancel(){
  this.recipeForm.reset();
   this.router.navigate(['recipes']);
}
}
