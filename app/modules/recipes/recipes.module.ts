import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { RecipesSharedModule } from './shared/recipes-shared.module';
import { SharedModule } from './../shared/shared.module';
import { RecipesRoutingModule, RecipeListComponent, RecipeDetailsComponent } from './recipes.routing';

@NgModule({
   imports: [
      NativeScriptModule,
      RecipesSharedModule,
      RecipesRoutingModule,
      SharedModule
   ],
   declarations: [
      RecipeListComponent,
      RecipeDetailsComponent
   ],
   schemas: [NO_ERRORS_SCHEMA]
})
export class RecipesModule { }
