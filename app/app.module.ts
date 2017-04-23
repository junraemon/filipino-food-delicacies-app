import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule, NSModuleFactoryLoader } from "nativescript-angular/router";
import * as elementRegistryModule from 'nativescript-angular/element-registry';

elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);
import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app.routing';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        AppRoutingModule
    ],
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
