import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { RecipeService } from './services/recipe.service';

@NgModule({
   imports: [
      NativeScriptModule,
   ],
   declarations: [],
   providers: [RecipeService],
   schemas: [NO_ERRORS_SCHEMA]
})
export class RecipesSharedModule { }
