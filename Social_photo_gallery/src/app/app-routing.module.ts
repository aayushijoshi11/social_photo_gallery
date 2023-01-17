import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistationComponent } from './registation/registation.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registation',component:RegistationComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
