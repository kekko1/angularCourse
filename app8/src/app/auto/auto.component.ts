import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

  marca:string;
  modello:string;
  anno:number;

  constructor() {
    this.marca="Fiat";
    this.modello="Ritmo";
    this.anno=2009;
   }

  ngOnInit(): void {
  }
  vediDati():void{
    alert(this.marca+" "+ this.modello + " "+this.anno);
  }

}
