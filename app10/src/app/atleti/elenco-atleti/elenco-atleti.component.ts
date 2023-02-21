import { Component, OnInit } from '@angular/core';
import { Atleta } from 'src/app/models/atleta';
import { AtletaService } from 'src/app/services/atleta.service';

@Component({
  selector: 'app-elenco-atleti',
  templateUrl: './elenco-atleti.component.html',
  styleUrls: ['./elenco-atleti.component.css']
})
export class ElencoAtletiComponent implements OnInit {

  elencoAtleti:Atleta[];
  constructor(private a : AtletaService) {
    this.elencoAtleti=[
      {
        id:0,
        nome:"string",
        cognome:"string",
        punti:10
      }
    ];
   }

  ngOnInit(): void {
    this.elencoAtleti = this.a.getAtleti();
  }

}
