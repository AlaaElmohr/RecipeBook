import { NgModule } from '@angular/core';
import { CommonModule }from '@angular/common';
import { RouterModule , Routes , PreloadAllModules} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthGuardService }  from './auth/auth-guard.service';
const appRoutes: Routes = [
  {path:'',component :HomeComponent},
 { path: 'recipes', loadChildren: './recipes/recipe.module#RecipeModule'},
  {path:'shopping-list',component :ShoppingListComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes , {preloadingStrategy: PreloadAllModules}),
   CommonModule
   ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
