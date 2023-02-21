import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent  {

  animali:string[];
  animaleScelto:string;
  constructor() { 
    this.animali=["a","b","c"];
    this.animaleScelto="";
  }

  scegliAnimale(a:any): void {
    
    this.animaleScelto = a.target.value;

    
  }

}
