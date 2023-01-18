import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { TmDialogRef } from '@tmlib/ui-sdk/dialog';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
 users: any[] = [];
 registrationForm!: FormGroup;
  submitted = false;

  constructor(protected ref: TmDialogRef<RegistrationComponent>,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group(
      {
       userName: ['', [Validators.required]],
        email: [ '', [ Validators.required,]],
        mobileNumber: [ '', [ Validators.required,]],
        password: [ '', [ Validators.required,]],
      }
    )
  }
  get f(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }
  createUser() {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }
    this.ref.close();

  }
  dismiss() {
    this.ref.close();
  }
 
}
