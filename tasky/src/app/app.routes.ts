import { Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';

export const routes: Routes = [
    {path:"", component:LandingpageComponent},
    {path:"signup",component:SignupComponent},
    {path:"signin",component:SigninComponent},
    
];
