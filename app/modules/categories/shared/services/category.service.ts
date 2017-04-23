import { Injectable, NgZone } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/share';

import { Category } from "../models/category.model";

@Injectable()
export class CategoryService {
   constructor(
      private ngZone: NgZone
   ) { }

   items: BehaviorSubject<Array<Category>> = new BehaviorSubject([]);

   private _allItems: Array<Category> = [];

   getAllCategories(): Observable<Category> {
      return new Observable((observer: any) => {
         let path = 'categories';

         let onValueEvent = (snapshot: any) => {
            this.ngZone.run(() => {
               let results = this.handleSnapshot(snapshot.value);
               observer.next(results);
            });
         };
         firebase.addValueEventListener(onValueEvent, `/${path}`);
      }).share();
   }

   handleSnapshot(data: any) {
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

   publishUpdates() {
      // here, we sort must emit a *new* value (immutability!)
      this._allItems.sort(function (a, b) {
         if (a.date > b.date) return -1;
         if (a.date < b.date) return 1;
         return 0;
      })
      this.items.next([...this._allItems]);
   }

   handleErrors(error) {
      console.log(JSON.stringify(error));
      return Promise.reject(error.message);
   }
}