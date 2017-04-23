import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions, ExtendedNavigationExtras } from 'nativescript-angular/router/router-extensions';
import { Observable } from 'rxjs/Observable';
import { isAndroid } from "platform";
import { Page } from "ui/page";

import { Category } from './../../shared/models/category.model';
import { CategoryService } from './../../shared/services/category.service';

@Component({
   moduleId: module.id,
   selector: "category-list",
   templateUrl: "category-list.component.html",
   styleUrls: ["category-list.component.css"]
})
export class CategoryListComponent implements OnInit {

   isLoaded: boolean = false;
   categories$: Observable<Category>;
   categoryList: any;
   categoryLoaded: any;
   @ViewChild('searchBar') searchBar: ElementRef;

   constructor(
      private page: Page,
      private routerExtensions: RouterExtensions,
      private categoryService: CategoryService
   ) {
      this.page.actionBar.title = "Categories";
      this.page.actionBar.className = "action-bar";
      this.categories$ = categoryService.getAllCategories();
      this.categories$.subscribe(snapshots => {
         this.categoryList = snapshots;
         this.categoryLoaded = snapshots;
         this.isLoaded = true;
      });
   }

   filterRecipe(category: Category) {
      let navigationExtras: ExtendedNavigationExtras = {
         queryParams: {
            "id": category.id,
            "name": category.name,
            "imageUrl": category.imageUrl,
            "description": category.description,
            "date": category.date,
         }
      };
      this.routerExtensions.navigate(["/categories/details", category.id], navigationExtras);
   }

   initializeItems(): void {
      this.categoryList = this.categoryLoaded;
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
      this.categoryList = this.categoryList.filter((v) => {
         if (v.name && q) {
            if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) { return true; }
            return false;
         }
      });
   }

   ngOnInit() { }
}
