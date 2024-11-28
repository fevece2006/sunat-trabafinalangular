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
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    // Define el FormGroup con los nombres correctos
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Campo Correo
      password: ['', [Validators.required]], // Campo password
    });
  }

  //async  
 //  onSubmit() {
  async onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      try {
        console.log('Formulario válido:', { email, password });
        // Aquí puedes incluir lógica adicional como una llamada al servicio de autenticación
        this.router.navigate(['/tarea']); // Redirecciona a la página principal
      } catch (error) {
        this.errorMessage = 'Error al iniciar sesión. Por favor, inténtelo nuevamente.';
        console.error('Detalles del error:', error);
      }
    } else {
      this.errorMessage = 'Por favor complete todos los campos correctamente.';
    }
  }
}
