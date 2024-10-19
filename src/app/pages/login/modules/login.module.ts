import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { LoginComponent } from '../login.component';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CardModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    FloatLabelModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
