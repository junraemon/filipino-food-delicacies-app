import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions, ExtendedNavigationExtras } from 'nativescript-angular/router/router-extensions';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { isAndroid } from "platform";

import { Recipe } from './../../../recipes/shared/models/recipe.model';
import { RecipeService } from './../../../recipes/shared/services/recipe.service';

@Component({
   moduleId: module.id,
   selector: "category-details",
   templateUrl: "category-details.component.html",
   styleUrls: ["category-details.component.css"]
})
export class CategoryDetailsComponent implements OnInit {
   category: any;
   isLoaded: boolean = false;
   recipes$: Observable<Recipe>;
   recipeList: Array<Recipe>;
   recipeLoaded: Array<Recipe>;
   @ViewChild('searchBar') searchBar: ElementRef;
   constructor(
      private activatedRoute: ActivatedRoute,
      private routerExtensions: RouterExtensions,
      private recipeService: RecipeService
   ) {
      this.activatedRoute.queryParams.subscribe(params => {
         this.category = params;
         this.recipes$ = recipeService.getRecipeByCategory(this.category.id);
      });
   }

   initializeItems(): void {
      this.recipeList = this.recipeLoaded;
   }

   ngOnInit() {
      this.recipes$.subscribe((snapshots: any) => {
         this.recipeList = snapshots;
         this.recipeLoaded = snapshots;
         this.isLoaded = true;
      });
   }

   onSearchBarLoaded() {
      if (isAndroid) {
         this.searchBar.nativeElement.android.clearFocus();
      }
   }

   search(value: any) {
      this.initializeItems();
      let q = value;
      if (!q) { return; }
      this.recipeList = this.recipeList.filter((v) => {
         if (v.name && q) {
            if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) { return true; }
            return false;
         }
      });
   }

   goBack() {
      this.routerExtensions.back();
   }

   recipeDetails(event) {
      let recipe: Recipe = this.recipeList[event.index];
      let navigationExtras: ExtendedNavigationExtras = {
         queryParams: {
            "name": recipe.name,
            "shortIntro": recipe.shortIntro,
            "imageUrl": recipe.imageUrl,
            "details": recipe.details,
            "date": recipe.date,
         }
      };
      this.routerExtensions.navigate(["/recipes/details", recipe.id], navigationExtras);
   }

}
