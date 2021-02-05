import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

/* 
  Defines the Routes for the NavBar item. 
  By default we redirect to HomeComponent the init page.
  And we catch any wrong type to PagenotfoundComponent
*/

const routes : Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:PagenotfoundComponent} 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
exports: [RouterModule]
})

export class AppRoutingModule { }
