import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent  {
  prodotto:any;
  classe:string[];
  constructor() {
    this.prodotto={
      nome:"Coltello",
      prezzo:10.6,
      pezzi:3
    };
    this.classe=[
      "alert alert-success"
    ];
   }

  aggiungi(): void {
    if( this.prodotto.pezzi>0){
      this.prodotto.pezzi--;
    }
    else if( this.prodotto.pezzi<3){
      this.classe=[
        "alert alert-warning"
      ];
    }
    else if( this.prodotto.pezzi==0){
      this.classe=[
        "alert alert-danger"
      ];
    }
  }

}
