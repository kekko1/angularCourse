import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from 'src/app/models/film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  @Input() film!:Film;
  @Output() selezionaFilm : EventEmitter<Film>;
  constructor() {
   // this.film = new Film("","","",0);
   this.selezionaFilm= new EventEmitter<Film>;
   }

  ngOnInit(): void {
  }
  seleziona(f:Film): void {
    // invia all'esterno il film selezionato
      this.selezionaFilm.emit(f);
  }
}
