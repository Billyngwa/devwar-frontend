import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  constructor (private userService:AuthService, private localstore:LocalstorageService){}
  signupForm!: FormGroup;
  categories = [
    "Automotive",
    "Business Support & Supplies ",
    "Computers & Electronics ",
    "Construction & Contractors ",
    "Education ",
    "Entertainment",
    "Food & Dining",
    "Health & Medicine ",
    "Home & Garden ",
    "Legal & Financial ",
    "Manufacturing, Wholesale,Distribution ",
    "Merchants (Retail) ",
    "Miscellaneous",
    "Personal Care & Services ",
    "Real Estate ",
    "Web development",
    "Import and Export",
  ]
  ngOnInit(){
    this.userService.getUsers().subscribe(data =>{
      console.log('data:',data["data" as keyof object]);
      
    })
    this.signupForm = new FormGroup({
        email:new FormControl("",[Validators.required,Validators.email]),
        password:new FormControl("", [Validators.required]),
        firstName: new FormControl("",[Validators.required]),
        lastName:new FormControl("",[Validators.required]),
    })
  }
  submitForm(){
    if(this.signupForm.valid){
      console.log(this.signupForm.value.email);
      this.userService.createUsers(this.signupForm.value);
 
      
    }else{
      console.log('error');
      
    }
  }
}
