import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { NoodlesListComponents } from './noodles-list/noodles-list.component';
import { NoodlesListItemComponent } from './noodles-list-item/noodles-list-item.component';
import { ModifyListItemComponent } from './modify-list-item/modify-list-item.component';

@NgModule({
  declarations: [AppComponent, NoodlesListComponents, NoodlesListItemComponent, ModifyListItemComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
