import { Component } from "@angular/core";
import { Page } from "ui/page";

@Component({
     moduleId: module.id,
     selector: "app-home",
     templateUrl: "home.component.html",
     styleUrls: ["home.component.css"]
})
export class HomeComponent {
     constructor(private page: Page) {
          this.page.actionBar.title = "Filipino Food Delicacies";
          this.page.actionBar.className = "action-bar";
     }
}
