import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  myForm: FormGroup;
  wasSubmitted!: boolean;

  constructor(){
      this.myForm = new FormGroup({
          name: new FormControl('', Validators.required),
          patronymic: new FormControl('', Validators.required),
          surname: new FormControl('', Validators.required),
          email: new FormControl('', [
            Validators.required,
            Validators.email
        ]),
        password: new FormControl('', Validators.required),
        ads: new FormControl('', Validators.required),
        gender:
         new FormControl('', Validators.required),
      });
  }
  ngOnInit(): void {
    this.wasSubmitted = false;
  }

  onSubmit(): void{
    this.wasSubmitted = true;
    if (this.myForm.invalid) {
      console.log('The form is invalid!');
    }
    else {
      console.log(this.myForm);
    }
  }



}
