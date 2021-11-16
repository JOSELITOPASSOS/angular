import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';
import { HomeComponent } from './home.component';
import { SignUpComponent } from './signup/signup.component';
import { SignInComponent } from './singnin/signin.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: SignInComponent
          },
          {
            path: 'signup',
            component: SignUpComponent,
          }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {

}
