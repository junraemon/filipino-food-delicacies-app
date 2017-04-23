import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { SharedModule } from './../shared/shared.module';
import { HomeRoutingModule, HomeComponent, AboutComponent } from './home.routing';

@NgModule({
   imports: [
      NativeScriptModule,
      SharedModule,
      HomeRoutingModule
   ],
   declarations: [
      HomeComponent,
      AboutComponent
   ],
   schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
