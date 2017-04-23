import { Injectable, NgZone } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/share';

import { Recipe } from './../models/recipe.model';

@Injectable()
export class RecipeService {
   constructor(
      private ngZone: NgZone
   ) { }

   items: BehaviorSubject<Array<Recipe>> = new BehaviorSubject([]);

   private _allItems: Array<Recipe> = [];

   public getAllRecipes(): Observable<Recipe> {
      return new Observable((observer: any) => {
         let path = 'recipes';
         firebase.addValueEventListener((snapshot: any) => {
            this.ngZone.run(() => {
               let results = this.handleSnapshot(snapshot.value);
               observer.next(results);
            });
         }, `/${path}`);
      }).share();
   }

   public getRecipeByCategory(categoryId: string): Observable<Recipe> {
      return new Observable((observer: any) => {
         let path = 'recipes';
         firebase.addValueEventListener((snapshot: any) => {
            this.ngZone.run(() => {
               let results = this.handleSnapshot(snapshot.value).filter(mapped => {
                  let find = false;
                  mapped.categories.forEach(category => {
                     if (category == categoryId) { find = true; return false; };
                  });
                  return find;
               });
               observer.next(results);
            });
         }, `/${path}`);
      }).share();
   }

   private handleSnapshot(data: any) {
      //empty array, then refill and filter
      this._allItems = [];
      if (data) {
         for (let id in data) {
            let result = (<any>Object).assign({ id: id }, data[id]);
            this._allItems.push(result);
         }
         this.publishUpdates();
      }
      return this._allItems;
   }

   private publishUpdates() {
      // here, we sort must emit a *new* value (immutability!)
      this._allItems.sort(function (a, b) {
         if (a.date > b.date) return -1;
         if (a.date < b.date) return 1;
         return 0;
      })
      this.items.next([...this._allItems]);
   }
}