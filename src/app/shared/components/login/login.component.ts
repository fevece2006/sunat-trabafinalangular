import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null=null;

  constructor(private fb: FormBuilder, private router: Router) {
    // Define el FormGroup con los nombres correctos
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email], // Campo Correo
      password: ['', [Validators.required, Validators.minLength(6)]], // Campo password
    });
  }

  //async  
   onSubmit() {
    if (this.loginForm.valid) {
      const {email, password} =this.loginForm.value;
      try {
      console.log('Formulario válido:', this.loginForm.value);
      this.router.navigate(['/home']); // redirecciona
    }   catch(error){
      this.errorMessage='Error al iniciar Sesion. Intente de Nuevo';
      console.error('Error al iniciar Sesion:',error);
    } 
   
  }
 
} 
}
