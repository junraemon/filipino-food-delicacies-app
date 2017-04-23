// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScript } from "nativescript-angular/platform-static";
import firebase = require("nativescript-plugin-firebase");
import { AppModuleNgFactory } from "./app.module.ngfactory";

firebase.init({ persist: true }).then(() => console.log("firebase.init done"), (error) => console.log("firebase.init error: " + error));
platformNativeScript().bootstrapModuleFactory(AppModuleNgFactory);
