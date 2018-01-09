import { Routes } from '@angular/router';
import { SignupFormComponent } from './app/singnup-form/singnup-form.component';
import { LoginFormComponent } from './app/login-form/login-form.component';
import { AngularroomComponent } from './app/angularroom/angularroom.component';



export const appRoutes: Routes= [


    {path: 'signup',component: SignupFormComponent},
    {path: 'login',component: LoginFormComponent},
    {path: 'angular',component: AngularroomComponent},
    {path: '',redirectTo: '/login', pathMatch: 'full'},

];


