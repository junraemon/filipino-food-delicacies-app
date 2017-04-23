import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from 'nativescript-telerik-ui/sidedrawer/angular';

import { BorderlessBtnDirective } from './directives/borderless-btn.directive';
import { SideDrawerPageComponent } from './components/side-drawer-page/side-drawer-page.component';

@NgModule({
   imports: [
      NativeScriptModule,
      NativeScriptUISideDrawerModule
   ],
   declarations: [
      SideDrawerPageComponent,
      BorderlessBtnDirective
   ],
   exports: [
      SideDrawerPageComponent,
      BorderlessBtnDirective
   ],
   schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
