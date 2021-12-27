import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Personas } from "../models/personas";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPersonas(){
    return this.http.get(`${this.API_URI}`);
  }

  getPersona(id: string){
    return this.http.get(`${this.API_URI}/${id}`);
  }

  deletePersona(id: string){
    return this.http.delete(`${this.API_URI}/${id}`);
  }

  savePersona(Personas: Personas){
    return this.http.post(`${this.API_URI}`, Personas);
  }

  updatePersona(id: string|number, updatePersona: Personas): Observable<any>{
    return this.http.put(`${this.API_URI}/${id}`, updatePersona);
  }

}
