import { MainComponent } from './view/main/main.component';
import { LoginComponent } from './view/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path:'',component:LoginComponent
},{
  path:'dash',component:MainComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
