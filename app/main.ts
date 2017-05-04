// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { enableProdMode } from '@angular/core';
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import firebase = require("nativescript-plugin-firebase");
import { AppModule } from "./app.module";

enableProdMode();
firebase.init({ persist: true }).then(() => {
   console.log("firebase.init done");
   firebase.keepInSync("/", true)
      .then(() => console.log("firebase.keepInSync is ON for /"),
      (error) => console.log("firebase.keepInSync error: " + error));
}, (error) => console.log("firebase.init error: " + error));
platformNativeScriptDynamic().bootstrapModule(AppModule);
