import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esempio',
  templateUrl: './esempio.component.html',
  styleUrls: ['./esempio.component.css']
})
export class EsempioComponent implements OnInit {

  display:string = "clicca sul puldante sotto";
  contatore : number = 0;
  casellaDisabilitata: boolean=true;
  onAbilita():void{
    this.casellaDisabilitata = false;
  }
  onCambia():void{
    if(this.casellaDisabilitata)
      this.casellaDisabilitata = false;
    else
      this.casellaDisabilitata = true;
  }
  onReset():void{
  
    this.contatore = 0;
    this.display="hai cliccato sul pulsante " + this.contatore + " volte";
  }
  onClick():void{
    this.contatore++;
    this.display="hai cliccato sul pulsante " + this.contatore + " volte";
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
