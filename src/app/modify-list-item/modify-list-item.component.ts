import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify-list-item',
  templateUrl: './modify-list-item.component.html',
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
      console.log(this.noodleForm.value);
      // Submit logic here
    }
  }
}
