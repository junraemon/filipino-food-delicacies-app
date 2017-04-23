import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';

const routes: Routes = [
   { path: '', component: CategoryListComponent },
   { path: 'details/:id', component: CategoryDetailsComponent },
];

export const CategoriesRoutingModule = NativeScriptRouterModule.forChild(routes);
export { CategoryListComponent, CategoryDetailsComponent }