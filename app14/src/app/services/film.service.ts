import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }
  getFilms(): import("../models/film").Film[] {
    throw new Error('Method not implemented.');
  }

  getFilms$(): Observable<Film[]>{
    throw new Error('Method not implemented.');

  }
  
  

  
}
