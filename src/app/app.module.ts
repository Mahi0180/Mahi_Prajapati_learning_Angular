import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {NoodlesListComponents} from "./noodles-list/noodles-list.component";
import {NoodlesListItemComponent} from "./noodles-list-item/noodles-list-item.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./modify-list-item/modify-list-item.component";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  "declarations": [

  ],

  "imports": [
    BrowserModule,
    ReactiveFormsModule,
    AppComponent,
    NoodlesListComponents,
    NoodlesListItemComponent,
    PageNotFoundComponent,
    ModifyListItemComponent
  ],

  "providers": [],
  "bootstrap": []
})

export class AppModule {}
