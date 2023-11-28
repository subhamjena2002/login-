import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  showedit = false ;
 
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
  username:any;
  password:any;
  name:any;
  phone:any;
  radio1:any;
  radio2:any;
  select:any;
  ngOnInit(){
    this.getUserDetails();
  }


  
getUserDetails(){
this.username = localStorage.getItem('username');
this.name = localStorage.getItem('name');
this.password = localStorage.getItem('password');
this.phone = localStorage.getItem('phone');
this.radio1 = localStorage.getItem('radio1');
this.radio2 = localStorage.getItem('radio2');
this.select = localStorage.getItem('select');

}

editUser(){
  
}

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
  localStorage.setItem('radio2', radio2 || 'NA');
  localStorage.setItem('select', select || 'NA');
  this.getUserDetails();
}

showEditUser(){
  this.showedit = true;
  this.registerForm.controls['username'].setValue(this.username);
  this.registerForm.controls['name'].setValue(this.name);
  this.registerForm.controls['pass1'].setValue(this.password);
  this.registerForm.controls['pass2'].setValue(this.password);
  this.registerForm.controls['phone_number'].setValue(this.phone);
  this.registerForm.controls['radio1'].setValue(this.radio1);
  this.registerForm.controls['radio2'].setValue(this.radio2);
  this.registerForm.controls['select'].setValue(this.select);
  
}
}
