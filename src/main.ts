import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, RouterModule, Routes} from "@angular/router";

import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', component: AppComponent},
  {path:'modify-list-item',component: ModifyListItemComponent},
  {path:'**',component: PageNotFoundComponent}
];

bootstrapApplication(AppComponent,
  { providers: [provideRouter(routes)],
  })
  .catch((err) => console.error(err));

