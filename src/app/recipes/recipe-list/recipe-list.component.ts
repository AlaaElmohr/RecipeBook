import { Component, OnInit , EventEmitter , Output } from '@angular/core';
import { Recipe } from '../recipe.model'
import {RecipeService } from './../recipe.service';
import {Router , ActivatedRoute} from '@angular/router';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] ;
  constructor(private recipeService:RecipeService,private router:Router , private route:ActivatedRoute,private authService:AuthService) { }
  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }
onNewRecipe(){
if(this.authService.isAuth()){
  this.router.navigate(['new'] , {relativeTo:this.route});
}
else{
    this.router.navigate(['signUp']);
}

}

}
