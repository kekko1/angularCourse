import { Component, OnInit } from '@angular/core';
import { Foto } from '../models/foto';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'app-gestione-foto',
  templateUrl: './gestione-foto.component.html',
  styleUrls: ['./gestione-foto.component.css']
})
export class GestioneFotoComponent implements OnInit {

  fotografie: Foto[];
  constructor(private f:FotoService) {
    this.fotografie =[];
   }

  ngOnInit(): void {
    this.fotografie=this.f.getFotografie();
  }
}
