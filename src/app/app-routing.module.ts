import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { UserDetailsComponent } from './signup-list/user-details/user-details.component';

const routes: Routes = [
  {path:'signin',component:SignInComponent},
  {path:'signup',component:SignUpComponent},
  {path:'userlist',component:UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
