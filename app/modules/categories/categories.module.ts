import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { CategoriesSharedModule } from './shared/categories-shared.module';
import { CategoriesRoutingModule, CategoryListComponent, CategoryDetailsComponent } from './categories.routing';
import { RecipesSharedModule } from './../recipes/shared/recipes-shared.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
   imports: [
      NativeScriptModule,
      CategoriesSharedModule,
      CategoriesRoutingModule,
      RecipesSharedModule,
      SharedModule
   ],
   declarations: [
      CategoryListComponent, CategoryDetailsComponent
   ],
   schemas: [NO_ERRORS_SCHEMA]
})
export class CategoriesModule { }
