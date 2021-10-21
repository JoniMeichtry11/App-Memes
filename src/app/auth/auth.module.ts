import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LogInComponent } from './pages/log-in/log-in.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';


@NgModule({
  declarations: [
    LogInComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
