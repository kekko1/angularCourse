import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {

  messaggi:number;
  constructor() {
    this.messaggi = 0;
  }
  aumenta(): void {
    this.messaggi++;
  }
  riduci(): void {
    this.messaggi > 0 ? this.messaggi-- : 0;
  }
  reset(): void {
      this.messaggi = 0;
  }
}
