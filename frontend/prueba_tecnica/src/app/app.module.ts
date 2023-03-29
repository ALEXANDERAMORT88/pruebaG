import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { NavigationNvbarComponent } from './layout/navigation_navbar/navigation-nvbar.component';
import { HttpClient } from '@angular/common/http';
import { CrearTareaComponent } from './components/crear-tarea/crear-tarea.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavigationNvbarComponent,
    CrearTareaComponent,
    ListaTareasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
