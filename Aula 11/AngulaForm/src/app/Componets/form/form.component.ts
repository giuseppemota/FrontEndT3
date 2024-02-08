import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  FormTest!: FormGroup;
  constructor() {
    this.FormTest = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      status: new FormControl(''),
    });
  }
  onSubmit() {
    console.log("OLA mundo");
    console.log(this.FormTest.value);
  }

}
