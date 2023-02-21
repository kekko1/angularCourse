import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  //cifre intere.minime 
  // cifre decimali.minime 
  //cifre decimali.massime 
  numero: number=123.456;
  parola: string = "Angular";
  sconto:number = 0.25;
  oggi:Date= new Date();
  prezzo:number = 1234.1234;
  
  constructor() { }

  ngOnInit(): void {
  }

}
