import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tarea } from 'src/app/models/tareas';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.scss']
})
export class CrearTareaComponent implements OnInit {
  tareaForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService){
    
this.tareaForm = this.fb.group({
  tarea: ['', Validators.required],
})
  }
  ngOnInit():void{
  }

  agregarTarea(){
    console.log(this.tareaForm)

    console.log(this.tareaForm.get('tarea')?.value) //para acceder a la tarea 

    const TAREA: tarea = {
      tarea: this.tareaForm.get('tarea')?.value,
    }
    console.log(TAREA);
    this.toastr.success('La Tarea fue agregada con Exitp!', 'Tarea Ingresada!');
    // this.router.navigate(['/']); con este metodo nos permite viajar a la ruta raiz despues de ingresar la tarea, no es necesario ya que trabajo en la misma pagina
  }

}
