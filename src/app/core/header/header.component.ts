import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import {DateStorageService} from '../../shared/date-storage.service';
import {Response} from '@angular/http';
import {AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:ActivatedRoute , private router:Router,private dateStorageService:DateStorageService,private authService :AuthService ) { }
header = " Fast Food";
expandValue = false;
counter :number = 0;
  ngOnInit() {
 if(this.router.url.substr(1,this.router.url.length) ==="recipes"){
this.header="Recipes"
}
 if(this.router.url.substr(1,this.router.url.length) === "shopping-list"){
this.header="Shopping List"
}
if(this.router.url.substr(1,this.router.url.length) === "signUp"){
this.header="Sign Up"
}
if(this.router.url.substr(1,this.router.url.length) === "signIn"){
this.header="Sign In"
}
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
  saveData(){
     this.dateStorageService.storeRecipe().subscribe( (response:Response)=>console.log(response));
  }
  fetchData(){
     this.dateStorageService.getRecipe();
  }
  logOut(){
    this.authService.logOut();
  }
}
