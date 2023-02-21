import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pulsante',
  templateUrl: './pulsante.component.html',
  styleUrls: ['./pulsante.component.css']
})
export class PulsanteComponent implements OnInit {
  // il valore testo verra passato in ingresso dal padre
  @Input() testo:string;
  // dichiaro che questo componente emettera verso l'esterno un nuovo tipo di evento in modo che il padre potra intercettarlo
  @Output() pulsanteCliccato:EventEmitter<string>;

  constructor() {
    this.testo="testo del pulsante";
    this.pulsanteCliccato= new EventEmitter<string>();
  }

  ngOnInit(): void {
  }
  onClick(testo:string): void {
    this.pulsanteCliccato.emit(this.testo);
  }

}
