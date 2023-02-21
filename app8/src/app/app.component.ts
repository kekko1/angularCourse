import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app8';
  direttive:boolean =false;
  content:boolean =false;
  riferimenti:boolean =false;
  pipes:boolean=true;
  mostraDirettive():void{
    this.direttive=true;
  }
  mostraContent():void{
    this.content=true;
  }
  mostraRiferimenti():void{
    this.riferimenti=true;
  }
  mostraPipes():void{
    this.pipes=true;
  }
}
