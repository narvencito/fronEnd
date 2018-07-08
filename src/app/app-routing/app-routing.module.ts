import { CreateUserComponent } from './../create-user/create-user.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from '../app.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [
  {path: '', redirectTo: '/userComponent', pathMatch: 'full'},
  {path: 'appComponent', component: AppComponent},
  {path: 'userComponent', component: UserComponent},
  {path: 'createUserComponent', component: CreateUserComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],

  declarations: []
})
export class AppRoutingModule { }
