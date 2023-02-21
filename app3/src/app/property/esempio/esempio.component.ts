import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esempio',
  templateUrl: './esempio.component.html',
  styleUrls: ['./esempio.component.css']
})
export class EsempioComponent implements OnInit {

  percorsoImg:string = "https://via.placeholder.com/600/92c952";
  altImg:string= "Logo di Angular";

  percorsoLink:string = "https://angular.io";
  titoloLink:string = "Vai al sito di Angular";
  
  temperatura:number= 16;
  
  pulsanteDisabilitato:boolean=false;
  casellaDisabilitato:boolean=true;
  stileParagrafo:string="color:red;font-size:3em";
  classiParagrafo:string="evidenziato centrato";




  constructor() { }

  ngOnInit(): void {
  }

}
