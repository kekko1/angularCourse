import { Injectable } from '@angular/core';
import { studente } from '../data/studenti';
import { Studente } from '../models/studente';

@Injectable({
  providedIn: 'root'
})
export class StudenteService {

  constructor() {}

  getStudenti():Studente[]{
    return studente;
  }
  addStudente(studente:Studente):void{
    this.getStudenti().push(studente);
  }
}
