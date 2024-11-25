import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { LogoutComponent } from './shared/components/logout/logout.component';
import { HomeComponent } from './shared/components/home/home.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,    LoginComponent, LogoutComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    AppRoutingModule,
    FloatLabelModule,
    CardModule
    

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
