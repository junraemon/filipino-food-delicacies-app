import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { CategoryService } from './services/category.service';

@NgModule({
   imports: [
      NativeScriptModule,
   ],
   declarations: [],
   providers: [CategoryService],
   schemas: [NO_ERRORS_SCHEMA]
})
export class CategoriesSharedModule { }
