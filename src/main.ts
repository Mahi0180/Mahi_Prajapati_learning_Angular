import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter ,RouterModule} from "@angular/router";
import {routes} from "./app/app.routes";


bootstrapApplication(AppComponent,
  { providers: [provideRouter(routes)],
  })
  .catch((err) => console.error(err));

const routes=[
  {path: '', component: AppComponent},
];
