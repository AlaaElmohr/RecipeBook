import { Component , OnInit} from '@angular/core';
import * as  firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit(){
        firebase.initializeApp({
          apiKey: "AIzaSyBmFsaf1PEz7q5gMQ72uKwRnJwXCHtuVlo",
          authDomain: "recipes-c6c35.firebaseapp.com",
        });
  }
}
