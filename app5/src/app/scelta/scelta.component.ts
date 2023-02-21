import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scelta',
  templateUrl: './scelta.component.html',
  styleUrls: ['./scelta.component.css']
})
export class SceltaComponent implements OnInit {

  pulsanteNascosto:boolean=false;
  pulsanteVisibile:boolean=true;
  paragrafoVisibile:boolean=true;
  numero:number=9;
  componenteVisibile:boolean=true;

  paese:string="Italia";

  persona:any = {
    nome:"fra",
    cognome:"adu",
    cf:"dna"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
