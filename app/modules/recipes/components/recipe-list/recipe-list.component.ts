import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import { RouterExtensions, ExtendedNavigationExtras } from 'nativescript-angular/router/router-extensions';
import { isAndroid } from "platform";
import { Page } from "ui/page";

import { RecipeService } from './../../shared/services/recipe.service';
import { Recipe } from './../../shared/models/recipe.model';

@Component({
   moduleId: module.id,
   selector: "recipe-list",
   templateUrl: "recipe-list.component.html",
   styleUrls: ["recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
   isLoaded: boolean = false;
   recipes$: Observable<Recipe>;
   recipeList: Array<Recipe>;
   recipeLoaded: Array<Recipe>;
   @ViewChild('searchBar') searchBar: ElementRef;
   constructor(
      private page: Page,
      private router: Router,
      private routerExtensions: RouterExtensions,
      private recipeService: RecipeService
   ) {
      this.page.actionBar.title = "Recipes";
      this.page.actionBar.className = "action-bar";
      this.recipes$ = recipeService.getAllRecipes();
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
