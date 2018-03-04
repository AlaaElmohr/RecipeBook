import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
token:string;
  constructor() { }
  signUp(email:string,password:string){
    firebase.auth().createUserWithEmailAndPassword(email,password).catch( error => console.log(error));
  }
  signIn(email:string,password:string){
    firebase.auth().signInWithEmailAndPassword(email,password).then( response =>
      {
        console.log(response);
        firebase.auth().currentUser.getToken().then( (token:string)=>{
          this.token=token;
        }
    );

  });
}
 logOut(){
    firebase.auth().signOut();
    this.token=null;
  }
  getToken(){
     return this.token;
  }
  isAuth(){
    if(this.token != null) return true;
    return false;
  }
}
