import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaComponent } from './tarea.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TareaEditarComponent } from '../tarea-editar/tarea-editar.component';
import { TareaListComponent } from '../tarea-list/tarea-list.component';
import { TareaAgregarComponent } from '../tarea-agregar/tarea-agregar.component';
import { CardModule } from 'primeng/card';
import { LogoutComponent } from '../../../shared/components/logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';


import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    TareaComponent,TareaEditarComponent,TareaListComponent,TareaAgregarComponent,LogoutComponent
  ],
  imports: [
    CommonModule, RouterModule, FormsModule,TableModule,TooltipModule,ButtonModule,CardModule,CalendarModule,DropdownModule,
    ReactiveFormsModule,BrowserAnimationsModule
  ]
})
export class TareaModule { }
