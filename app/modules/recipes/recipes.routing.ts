import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

const routes: Routes = [
   { path: '', component: RecipeListComponent },
   { path: 'details/:id', component: RecipeDetailsComponent },
];

export const RecipesRoutingModule = NativeScriptRouterModule.forChild(routes);
export { RecipeListComponent, RecipeDetailsComponent }