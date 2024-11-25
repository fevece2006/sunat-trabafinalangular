import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
 
  {
    path:'', redirectTo:'/login', pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'home',
    component:HomeComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
