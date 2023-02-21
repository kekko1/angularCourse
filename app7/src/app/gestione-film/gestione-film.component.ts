import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film';

@Component({
  selector: 'app-gestione-film',
  templateUrl: './gestione-film.component.html',
  styleUrls: ['./gestione-film.component.css']
})
export class GestioneFilmComponent implements OnInit {
  elencoFilm : Film[];

  filmSelezionato?:Film;

  constructor() {
    this.elencoFilm=[
      new Film("aa11","Holliwood","Commedia",1980),
      new Film("bb11","Strada","Commedia",2001),
      new Film("cc11","Peter Pan","Commedia",2009),
      new Film("dd11","Spiderman","Commedia",2013),
    ];
   }

  ngOnInit(): void {
  }
  selezionato(f:Film): void {
    this.filmSelezionato = f;
    //this.elencoFilm.push(f);
  }
}
