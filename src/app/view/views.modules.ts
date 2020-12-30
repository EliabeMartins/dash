import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
 


@NgModule({
  declarations: [LoginComponent, MainComponent, NavbarComponent, SidebarComponent],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
