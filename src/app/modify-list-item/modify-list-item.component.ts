import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HighlightOnFocusDirective} from "../highlight-on-focus.directive";

@Component({
  selector: 'app-modify-list-item',
  imports: [
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HighlightOnFocusDirective
  ],
  templateUrl: './modify-list-item.component.html',
  standalone: true,
  styleUrls: ['./modify-list-item.component.css']
})
export class ModifyListItemComponent {
  noodleForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.noodleForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.noodleForm.valid) {
      console.log(this.noodleForm.value);}
  }
}
