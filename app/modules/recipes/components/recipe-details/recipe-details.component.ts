import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';

@Component({
   moduleId: module.id,
   selector: "recipe-details",
   templateUrl: "recipe-details.component.html",
   styleUrls: ["recipe-details.component.css"]
})
export class RecipeDetailsComponent implements OnInit {
   recipe: any;
   constructor(
      private activatedRoute: ActivatedRoute,
      private routerExtensions: RouterExtensions,
   ) { }

   ngOnInit() {
      this.activatedRoute.queryParams.subscribe(params => {
         this.recipe = params;
      });
   }

   goBack() {
      this.routerExtensions.back();
   }
}
