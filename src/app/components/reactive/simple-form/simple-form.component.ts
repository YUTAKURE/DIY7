import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrl: './simple-form.component.css',
})
export class SimpleFormComponent implements OnInit {
  myForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    country: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    note: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  onSubmit() {
    if (this.myForm.valid) {
      console.warn(this.myForm.value);
    } else {
      alert(
        'Please fill in all the fields, and\nFirst Name must be at least 2 characters \nLast Name must be at least 2 characters \nCountry must be at least 5 characters \nNote must be at least 10 characters'
      );
    }
  }

  onReset() {
    this.myForm.reset({
      firstName: '',
      lastName: '',
      country: '',
      note: '',
    });
  }

  // constructor() {}
  ngOnInit(): void {}
}
