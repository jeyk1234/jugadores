import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JugadoresModelService } from '../shared/jugadores-model.service'
import { JugadoresModel } from '../shared/jugadores-model.model';

declare var M: any;

@Component({
  selector: 'app-jugadores-model',
  templateUrl: './jugadores-model.component.html',
  styleUrls: ['./jugadores-model.component.css'],
  providers: [ JugadoresModelService ]
})
export class JugadoresModelComponent implements OnInit {

  constructor(private jugadorService : JugadoresModelService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshJugadorList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.jugadorService.selectedJugador = {
      _id: "",
      nombre: "",
      cedula: null,
      posicion: "",
      numeroCamiseta: null,
      equipo: "",
      fechaNacimiento: null,
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.jugadorService.postJugador(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshJugadorList();
        M.toast({ html: 'Guardado satisfactoriamente', classes: 'rounded' });
    });
    }
    else {
      this.jugadorService.putJugador(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshJugadorList();
        M.toast({ html: 'Actualizado satisfactoriamente', classes: 'rounded' });
      });
    }
  }

  refreshJugadorList() {
    this.jugadorService.getJugadorList().subscribe((res) => {
      this.jugadorService.jugadores = res as JugadoresModel[];
    });
  }

  onEdit(jug: JugadoresModel) {
    this.jugadorService.selectedJugador = jug;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('¿Estás seguro de borrar este registro?') == true) {
      this.jugadorService.deleteJugador(_id).subscribe((res) => {
        this.refreshJugadorList();
        this.resetForm(form);
        M.toast({ html: 'Borrado satisfactoriamente', classes: 'rounded' });
      });
    }
  }

}
