import { Injectable } from '@angular/core';
import { fotografie } from '../data/fotografie';
import { Foto } from '../models/foto';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor() { }
  getFotografie():Foto[]{
    return fotografie;
  }
}
