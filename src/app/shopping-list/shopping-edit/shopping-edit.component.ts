import { Component, OnInit ,Output , EventEmitter, Input,ViewChild, OnDestroy} from '@angular/core';
import { Ingredient} from './../../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy {
  editMode=false;
  index:number;
  editModeAction:string = "Add";
ingredient:Ingredient = new Ingredient('',0);
  private subscription:Subscription;
  constructor(private shoppingListService:ShoppingListService) { }
@ViewChild('f') f:NgForm;
  ngOnInit() {
    this.subscription = this.shoppingListService.selectedValue.subscribe( (index:number)=>{
      this.index=index;
       this.editMode=true;
       if(this.editMode){
          this.editModeAction='Edit';
           this.ingredient=this.shoppingListService.getIngredientId(index);
           this.f.setValue({
             name :this.ingredient.name,
             amount:this.ingredient.amount
           })
       }
    });

  }
submit(f:NgForm){
  if(this.editMode){
    const ingredient= new Ingredient(this.f.value.name,this.f.value.amount)
    this.shoppingListService.editIngredient(this.index,ingredient);
  }
  else{
  const ingredient = new Ingredient(f.value.name,f.value.amount);
  this.shoppingListService.addIngredient(ingredient);
}
}
delete(){
  this.shoppingListService.deleteIngredient(this.index);
  this.ingredient.name="";
 this.ingredient.amount=0;
}
clear(){
  this.f.reset();
}
ngOnDestroy(){
  this.subscription.unsubscribe();
}
}
