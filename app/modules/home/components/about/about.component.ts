import { Component } from "@angular/core";
import { Page } from "ui/page";

@Component({
     moduleId: module.id,
     selector: "app-about",
     templateUrl: "about.component.html",
     styleUrls: ["about.component.css"]
})
export class AboutComponent {
     constructor(private page: Page) {
          this.page.actionBar.title = "About Us";
          this.page.actionBar.className = "action-bar";
     }
}
