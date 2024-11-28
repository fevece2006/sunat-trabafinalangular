import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { HomeComponent } from './shared/components/home/home.component';
import { TareaComponent } from './features/tareas/tarea/tarea.component';
import { TareaAgregarComponent } from './features/tareas/tarea-agregar/tarea-agregar.component';
import { TareaListComponent } from './features/tareas/tarea-list/tarea-list.component';
import { TareaEditarComponent } from './features/tareas/tarea-editar/tarea-editar.component';

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

  {
    path:'tarea',
    component:TareaComponent,
    //canActivate:[AuthGuard],
    children:[
      { path:'list', component:TareaListComponent },
      { path:'agregar', component:TareaAgregarComponent },
      { path:'editar', component:TareaEditarComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
