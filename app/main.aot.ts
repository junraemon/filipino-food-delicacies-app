// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { enableProdMode } from '@angular/core';
import { platformNativeScript } from "nativescript-angular/platform-static";
import firebase = require("nativescript-plugin-firebase");
import { AppModuleNgFactory } from "./app.module.ngfactory";

enableProdMode();
firebase.init({ persist: true }).then(() => {
   console.log("firebase.init done");
   firebase.keepInSync("/", true)
      .then(() => console.log("firebase.keepInSync is ON for /"),
      (error) => console.log("firebase.keepInSync error: " + error));
}, (error) => console.log("firebase.init error: " + error));
platformNativeScript().bootstrapModuleFactory(AppModuleNgFactory);
