import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacionService } from "./services/autenticacion.service";

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LogInComponent } from './pages/log-in/log-in.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';


@NgModule({
  declarations: [
    LogInComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AutenticacionService]
})
export class AuthModule { }
