import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarea-agregar',
  templateUrl: './tarea-agregar.component.html',
  styleUrls: ['./tarea-agregar.component.css'],
})
export class TareaAgregarComponent {
  
  tareaForm: FormGroup;

  // Opciones para los dropdowns
  prioridades = [
    { label: 'Alta', value: 'Alta' },
    { label: 'Media', value: 'Media' },
    { label: 'Baja', value: 'Baja' },
  ];
  
  estados = [
    { label: 'Pendiente', value: 'Pendiente' },
    { label: 'En Proceso', value: 'En Proceso' },
    { label: 'Completado', value: 'Completado' },
  ];

  @Output() agregarTarea = new EventEmitter<any>();
  @Output() cancelar = new EventEmitter<void>();

  constructor(private router: Router,private fb: FormBuilder) {
    this.tareaForm = this.fb.group({
      nro: [null, [Validators.required]],
      tarea: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      fecha: [null, [Validators.required]],
      prioridad: [null, [Validators.required]],
      estado: [null, [Validators.required]],
    });
  }

  onSubmit() {
    if (this.tareaForm.valid) {
      this.agregarTarea.emit(this.tareaForm.value);
      this.tareaForm.reset();
    }
  }

  onCancel() {
    // Navegar a la lista de tareas
    this.router.navigate(['tarea/list']);
  }
}
