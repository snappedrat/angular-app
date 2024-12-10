import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { Component6Component } from './component6/component6.component';
import { Component7Component } from './component7/component7.component';
import { Component8Component } from './component8/component8.component';
import { Component9Component } from './component9/component9.component';
import { Component10Component } from './component10/component10.component';
import { authGuard } from '../guards/auth.guard';

export const routes: Routes = [
   { path:'',redirectTo: 'login', pathMatch: 'full'},
   { 
      path:'login',
      loadComponent: ()=>import('./login/login.component').then(c=>c.LoginComponent)
   },
   { 
      path:'register',
      loadComponent: ()=> import('./register/register.component').then(c=>c.RegisterComponent)
   },

   { 
      path:'component2',
      loadComponent: ()=> import('./component2/component2.component').then(c => c.Component2Component)
      ,canActivate: [authGuard]
   },
   { 
      path:'component3',
      loadComponent: ()=> import('./component3/component3.component').then(c => c.Component3Component)
      ,canActivate: [authGuard]

   },
   { 
      path:'component4',
      loadComponent: ()=> import('./component4/component4.component').then(c => c.Component4Component)
      ,canActivate: [authGuard]

   },
   { 
      path:'home',
      loadComponent: ()=> import('./home/home.component').then(c => c.HomeComponent)
      ,canActivate: [authGuard]

   },
   { 
      path:'component6',
      loadComponent: ()=> import('./component6/component6.component').then(c => c.Component6Component)
      ,canActivate: [authGuard]

   },
   { 
      path:'component7',
      loadComponent: ()=> import('./component7/component7.component').then(c => c.Component7Component)
      ,canActivate: [authGuard]

   },
   { 
      path:'component8',
      loadComponent: ()=> import('./component8/component8.component').then(c => c.Component8Component)
      ,canActivate: [authGuard]

   },
   { 
      path:'component9',
      loadComponent: ()=> import('./component9/component9.component').then(c => c.Component9Component)
      ,canActivate: [authGuard]

   },
   { 
      path:'component10',
      loadComponent: ()=> import('./component10/component10.component').then(c => c.Component10Component)
      ,canActivate: [authGuard]

   },
   

   

   
  




];
