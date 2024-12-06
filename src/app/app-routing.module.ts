import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { LogoutComponent } from './shared/components/logout/logout.component';
import { HomeComponent } from './shared/components/home/home.component';
import { TareaComponent } from './features/tareas/tarea/tarea.component';
import { TareaAgregarComponent } from './features/tareas/tarea-agregar/tarea-agregar.component';
import { TareaListComponent } from './features/tareas/tarea-list/tarea-list.component';
import { TareaEditarComponent } from './features/tareas/tarea-editar/tarea-editar.component';
import { AuthGuard } from './core/guardians/auth.guard';

const routes: Routes = [

  {
    path:'', redirectTo:'/login', pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
  },

  {
    path:'logout',
    component:LogoutComponent,
  },
  {
    path:'home',
    component:HomeComponent,
  },

  {
    path:'tareas',
    component:TareaComponent,
    canActivate:[AuthGuard],
    children:[
      { path:'list', component:TareaListComponent },
      { path:'create', component:TareaAgregarComponent },
      { path:'update/:id', component:TareaEditarComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
