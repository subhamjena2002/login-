import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private formBuilder: FormBuilder) {}
  

  registerForm = this.formBuilder.group({
  username:[''],
  name:[''],
  pass1:[''],
  pass2:[''],
  phone_number:[''],
  radio1:[],
  radio2:[],
  select:[],
})

  Registration(){
    // console.log("abc",this.registerForm);
    const username = this.registerForm.value.username;
    const name= this.registerForm.value.name;
    const password = this.registerForm.value.pass1;
    // const confirmPassword = this.registerForm.value.pass2;
    const phoneNumber = this.registerForm.value.phone_number;
    const radio1 = this.registerForm.value.radio1;
    const radio2 = this.registerForm.value.radio2;
    const select = this.registerForm.value.select;
    localStorage.setItem('username', username || 'NA');
    localStorage.setItem('name', name || 'NA');
    localStorage.setItem('password', password || 'NA');
    localStorage.setItem('phone', phoneNumber || 'NA');
    localStorage.setItem('radio1', radio1 || 'NA');
    localStorage.setItem('select', select || 'NA');
     
  }
}
