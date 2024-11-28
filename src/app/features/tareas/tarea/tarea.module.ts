import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaComponent } from './tarea.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TareaEditarComponent } from '../tarea-editar/tarea-editar.component';
import { TareaListComponent } from '../tarea-list/tarea-list.component';
import { TareaAgregarComponent } from '../tarea-agregar/tarea-agregar.component';
import { CardModule } from 'primeng/card';


import { ButtonModule } from 'primeng/button';


import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';


@NgModule({
  declarations: [
    TareaComponent,TareaEditarComponent,TareaListComponent,TareaAgregarComponent
  ],
  imports: [
    CommonModule, RouterModule, FormsModule,TableModule,TooltipModule,ButtonModule,CardModule
  ]
})
export class TareaModule { }
