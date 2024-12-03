import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../../core/services/task/task.service';
import { Task } from '../../../core/models/task/task';

@Component({
  selector: 'app-tarea-editar',
  templateUrl: './tarea-editar.component.html',
  styleUrls: ['./tarea-editar.component.css'],
})
export class TareaEditarComponent implements OnInit {

  tareaForm: FormGroup;
  tareas: Task[] = [];
  task: Task | undefined;
  errorMessage: string | null = null;

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

  categories = [
    { label: 'Personales', value: '1' },
    { label: 'En Laborales', value: '2' },
    { label: 'Reuniones', value: '3' },


  ];

  @Output() agregarTarea = new EventEmitter<any>();
  @Output() cancelar = new EventEmitter<void>();

  constructor(private taskService: TaskService, private router: Router,private fb: FormBuilder) {
    this.tareaForm = this.fb.group({
      id: [null, [Validators.required]],
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      date: [null, [Validators.required]],
      priority: [null, [Validators.required]],
      state: [null, [Validators.required]],
    });
  }

  ngOnInit() {

    this.taskService.getTaskById('674621b321ee034e26ea2d32').subscribe({
      next: (data) => {
        this.task = data;

        console.log(this.task);

        this.tareaForm = this.fb.group({
          id: [this.task.id],
          name: [this.task.name],
          category: [this.task.category],
          date: [this.task.date],
          priority: [this.task.priority],
          state: [this.task.state],
        });

      },
      error: (err) => {
        this.errorMessage = 'No se pudieron cargar las tareas.';
        console.error('Error al obtener tareas:', err);
      }
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
    this.router.navigate(['tareas/list']);
  }


  mapCategory(category: number): string {
    const categories: { [key: number]: string } = {
      1: 'Personales',
      2: 'Laborales',
      3: 'Reuniones'
      // Agrega más categorías según sea necesario
    };
    return categories[category] || 'Desconocida';
  }




}
