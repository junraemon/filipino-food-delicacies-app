import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'about', component: AboutComponent },
];

export const HomeRoutingModule = NativeScriptRouterModule.forChild(routes);
export { HomeComponent, AboutComponent }