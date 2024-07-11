import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './forgotpassword.component.html',
  styleUrl: '../signup/signup.component.scss'
})
export class ForgotpasswordComponent implements OnInit {
  emailform!:FormGroup;
  ngOnInit(): void {

    this.emailform= new FormGroup({
      email:new FormControl("",[Validators.required,Validators.email])
    })

  }
  submitForm(){
    if(this.emailform.valid){
      console.log(this.emailform.value.email);
      
    }else{
      console.log('error');
      
    }
  }
}
