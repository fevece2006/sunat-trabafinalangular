import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './shared/components/home/home.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { TaskComponent } from './features/task/task.component';
import { UserComponent } from './features/user/user.component';
//import { TareaListComponent } from './features/tareas/tarea-list/tarea-list.component';
//import { TareaAgregarComponent } from './features/tareas/tarea-agregar/tarea-agregar.component';
//import { TareaEditarComponent } from './features/tareas/tarea-editar/tarea-editar.component';
import { TareaModule } from './features/tareas/tarea/tarea.module';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { environment } from './environments/environment';

import { AngularFireAuthModule,  } from '@angular/fire/compat/auth';
import { AngularFireModule} from '@angular/fire/compat';



@NgModule({
  declarations: [
    AppComponent,    LoginComponent,  HomeComponent, 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    AppRoutingModule,
    FloatLabelModule,
    CardModule,
    TableModule,
    TooltipModule,TareaModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule


  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
