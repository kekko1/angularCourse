import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatiUtente } from '../models/dati-utente';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  datiForm:DatiUtente; // OGGETTO MAPPA FORM
  datiModel:DatiUtente;// ogggetto coi dati app
  submitOK:boolean;

  constructor() {
    this.submitOK=false;
    this.datiModel={
      nome:"",
      cognome:"",
      password:"",
      stato:"italia",
      interessiviaggi:false,
      interessilibri:true,
      interessisocial:false,
      titolostudio:"Laurea",
      commento:"commento"
    };

    // doppione copia
   // this.datiForm = Object.assign({}.this.datiModel)
   this.datiForm  = {...this.datiModel} ;
    
   }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm):void{
    if(form.valid){
      this.submitOK=true;
    }
    else{
      alert("no VALID");
    }
  }
}
