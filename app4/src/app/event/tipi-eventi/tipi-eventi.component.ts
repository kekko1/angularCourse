import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipi-eventi',
  templateUrl: './tipi-eventi.component.html',
  styleUrls: ['./tipi-eventi.component.css']
})
export class TipiEventiComponent implements OnInit {

  display:string=" passa sull'area di test";

  onMouseOver():void{
    this.display="mouse over";
  }
  onMouseOut():void{
    this.display="mouse out";
  }
  onClick():void{
    this.display="hai cliccato";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
