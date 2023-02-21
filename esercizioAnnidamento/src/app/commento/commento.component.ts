import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Commento } from 'src/models/commento';

@Component({
  selector: 'app-commento',
  templateUrl: './commento.component.html',
  styleUrls: ['./commento.component.css']
})
export class CommentoComponent implements OnInit {

  @Input() commento!:Commento;
  @Output() selezionaCommento : EventEmitter<Commento>;
  constructor() {
    this.selezionaCommento= new EventEmitter<Commento>;

  }
  
  ngOnInit(): void {
  }
  seleziona(c:Commento): void {
  
      this.selezionaCommento.emit(c);
  }
}


 