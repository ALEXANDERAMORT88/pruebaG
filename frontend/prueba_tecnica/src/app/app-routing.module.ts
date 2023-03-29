import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTareaComponent } from './components/crear-tarea/crear-tarea.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { NavigationNvbarComponent } from './layout/navigation_navbar/navigation-nvbar.component';

const routes: Routes = [
  {
    path:'',
    component: ListaTareasComponent,
  },
  {
   path:'crear-tarea',
   component: CrearTareaComponent
   },
 {
  path:'editar-tarea/:id',
  component: CrearTareaComponent
 },
 {path:'**',
redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
