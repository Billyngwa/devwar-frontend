import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LocalstorageService } from '../../../services/localstorage.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: '../signup/signup.component.scss'
})
export class SigninComponent implements OnInit {
  constructor (private userService:AuthService, private localstore:LocalstorageService){}

  signinForm!:FormGroup ;
  ngOnInit(): void {
      this.signinForm = new FormGroup({
        email: new FormControl("",[Validators.required, Validators.email]),
        password:new FormControl("",[Validators.required])
      })
  }
  submitForm(){
    if(this.signinForm.valid){
this.userService.signInUser(this.signinForm.value)
      
    }else{
      console.log('error');
      
    }
  }
}
