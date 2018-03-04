import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {AuthRoutingModule} from './auth-routing.module'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [SigninComponent,SignupComponent]
})
export class AuthModule { }
