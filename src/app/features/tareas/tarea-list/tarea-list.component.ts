import { Component, OnInit } from '@angular/core';
import { Task } from '../../../core/models/task/task';
import { TaskService } from '../../../core/services/task/task.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  providers: [DatePipe],
})
export class TareaListComponent implements OnInit {
  tareas: Task[] = [];
  errorMessage: string | null = null;

  constructor(private taskService: TaskService, private router: Router) { this.ngOnInit()}

  ngOnInit() {
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tareas = data;
      },
      error: (err) => {
        this.errorMessage = 'No se pudieron cargar las tareas.';
        console.error('Error al obtener tareas:', err);
      }
    });

  }

  editarTarea(tarea: any) {
    console.log('Editar tarea:', tarea);
  }

  borrarTarea(tarea: any) {
    console.log('Eliminar tarea:', tarea);
   // this.tareas = this.tareas.filter(t => t.nro !== tarea.nro);
  }

  invocarAgregar() {
    this.router.navigate(['tarea/agregar']);
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

  mapState(state: number): string {
    const states: { [key: number]: string } = {
      1: 'Por hacer',
      2: 'En progreso',
      3: 'Completada',
    };
    return states[state] || 'Desconocido';
  }

  mapPriority(priority: number): string {
    const priorities: { [key: number]: string } = {
      1: 'Alta',
      2: 'Media',
      3: 'Baja',
    };
    return priorities[priority] || 'Desconocida';
  }


}
