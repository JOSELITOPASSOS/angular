import { SignUpComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { SigninComponent } from './singnin/signin.component';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ SigninComponent, SignUpComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule
  ]
})
export class HomeModule {}
