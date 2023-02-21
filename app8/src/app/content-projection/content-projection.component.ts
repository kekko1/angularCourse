import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnInit {

  comandi:string[];
  articoli:any[];

  constructor() {
    this.comandi=[
      "aggiungi","apri","chiudi"
    ];
    this.articoli=[
      {
        nome:"panettone",
        descrizione:"panettone con uvetta",
        prezzo:12.4
      },
      {
        nome:"finocchi",
        descrizione:"jedjaehfdc auehce",
        prezzo:8.4
      },
      {
        nome:"pasta",
        descrizione:"panettone con uvetta",
        prezzo:2.4
      },
    ];
   }

  ngOnInit(): void {
  }

}
