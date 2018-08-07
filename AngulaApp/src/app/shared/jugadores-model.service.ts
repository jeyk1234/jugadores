import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { JugadoresModel } from './jugadores-model.model';



@Injectable(
 //{providedIn: 'root'}
)
export class JugadoresModelService {
  selectedJugador: JugadoresModel;
  jugadores: JugadoresModel[];

  readonly baseURL = 'http://localhost:3000/futbolito';

  constructor(private http : HttpClient) { }

  postJugador(jug : JugadoresModel){
    return this.http.post(this.baseURL, jug);
  }

  getJugadorList(){
    return this.http.get(this.baseURL);
  }

  putJugador(jug: JugadoresModel) {
    return this.http.put(this.baseURL + `/${jug._id}`, jug);
  }

  deleteJugador(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
