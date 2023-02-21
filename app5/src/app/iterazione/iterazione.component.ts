import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iterazione',
  templateUrl: './iterazione.component.html',
  styleUrls: ['./iterazione.component.css']
})
export class IterazioneComponent implements OnInit {

  nomi:string[]=[
    "Luca",
    "Giovanna",
    "Simona",
    "Felipe",
    "Carletto"
  ];

  persone = [
    {
      nome:"Lisa",
      cognome:"Freddi"
    },
    {
      nome:"Mario",
      cognome:"Petti"
    },
    {
      nome:"Omar",
      cognome:"Corso"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
