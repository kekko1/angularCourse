import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-elenco-film',
  templateUrl: './elenco-film.component.html',
  styleUrls: ['./elenco-film.component.css']
})
export class ElencoFilmComponent implements OnInit {

  films:Film[];
  constructor( private fs :FilmService) {

    this.films=[];
   }

  ngOnInit(): void {
    this.films= this.fs.getFilms();
  }

}
