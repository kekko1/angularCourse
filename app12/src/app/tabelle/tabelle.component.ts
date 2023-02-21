import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabelle',
  templateUrl: './tabelle.component.html',
  styleUrls: ['./tabelle.component.css']
})
export class TabelleComponent implements OnInit {

  persona:any[];

  constructor() {
    this.persona =[
      {
        codice:1,
        cognome:"Rossi",
        nome:"Francesco"
      },
      {
        codice:2,
        cognome:"Verdi",
        nome:"Mario"
      },
      {
        codice:3,
        cognome:"Forte",
        nome:"Carlo"
      }
    ];
   }

  ngOnInit(): void {
  }

}
