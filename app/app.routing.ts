import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

const routes: Routes = [
   { path: '', loadChildren: "./modules/home/home.module#HomeModule" },
   { path: 'recipes', loadChildren: "./modules/recipes/recipes.module#RecipesModule" },
   { path: 'categories', loadChildren: "./modules/categories/categories.module#CategoriesModule" }
];

export const AppRoutingModule = NativeScriptRouterModule.forRoot(routes);