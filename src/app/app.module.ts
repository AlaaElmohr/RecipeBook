import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import{RecipeModule} from './recipes/recipe.module';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import {AuthModule} from './auth/auth.module';
import { CoreModule } from './core/core.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule ,
    RecipeModule,
    AppRoutingModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
