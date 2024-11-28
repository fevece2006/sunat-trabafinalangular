import { Component,ViewEncapsulation  } from '@angular/core';


@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrl: './tarea-list.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TareaListComponent {

  tareas: any[] = [
    { nro: 1, tarea: 'Completar reporte', categoria: 'Laboral', fecha: '2024-11-27', prioridad: 'Alta', estado: 'Pendiente' },
    { nro: 2, tarea: 'Revisar correos', categoria: 'Personal', fecha: '2024-11-26', prioridad: 'Media', estado: 'Completado' },
    { nro: 3, tarea: 'Llamar al cliente', categoria: 'Reunion', fecha: '2024-11-28', prioridad: 'Critica', estado: 'Pendiente' },
    { nro: 4, tarea: 'Comprar víveres', categoria: 'Personal', fecha: '2024-11-25', prioridad: 'Baja', estado: 'En Proceso' },
    { nro: 5, tarea: 'Estudiar para examen', categoria: 'Personal', fecha: '2024-11-29', prioridad: 'Alta', estado: 'Pendiente' },
  ];

  
  editarTarea(tarea: any) {
    console.log('Editar tarea:', tarea);
  }

  borrarTarea(tarea: any) {
    console.log('Eliminar tarea:', tarea);
    this.tareas = this.tareas.filter(t => t.nro !== tarea.nro);
  }

}







