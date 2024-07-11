import { Routes, RouterLink} from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './components/auth/forgotpassword/forgotpassword.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

export const routes: Routes = [
    {path:"", component:LandingpageComponent, title:"GoFunds | Home of Organisation"},
    {path:"signup",component:SignupComponent,title:"sign up"},
    {path:"signin", component:SigninComponent,title:"sign in"},
    {path:"dashboard", component:DashboardComponent,
    children:[
        {path:"side", component:SidenavComponent,title:"tasks"},
        {path:"tasks", component:SigninComponent,title:"sign in"},


    ]},
    {path:"forgotPassword", component:ForgotpasswordComponent},

    {path:"**",redirectTo:""},
];
