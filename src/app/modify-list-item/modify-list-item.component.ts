import { Component ,OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NoodleService} from "../services/noodle.service";
import{Noodles} from '../models/noodles';
import {HighlightOnFocusDirective} from "../highlight-on-focus.directive";
@Component({
  selector: 'app-modify-list-item',
  templateUrl: './modify-list-item.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HighlightOnFocusDirective
  ],
  styleUrls: ['./modify-list-item.component.css']
})
export class ModifyListItemComponent implements OnInit {
  noodleForm: FormGroup;
  private currentNoodle: any;

  constructor(private fb: FormBuilder,private noodleService: NoodleService) {
    this.noodleForm = this.fb.group({
      id:['',[Validators.required,  Validators.pattern("^[0-9]*$")]],
      name:['',[Validators.required,  Validators.pattern("^[a-zA-Z0-9]*$")]],
    });
  }

  ngOnInit(): void {
    const state = window.history.state;
    if (state && state.noodle) {
      this.currentNoodle = state.noodle;
      this.noodleForm.patchValue(this.currentNoodle);
    }
  }

  addOrUpdateNoodle() {
    const noodle: Noodles = this.noodleForm.value;
    if (this.currentNoodle) {
      // Update existing noodle
      this.noodleService.editNoodle(noodle);
    } else {
      // Add new noodle
      this.noodleService.addnoodle(noodle);
    }
    this.noodleForm.reset();
  }
}
