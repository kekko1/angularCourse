import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Utente } from 'src/app/models/utente';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-nuovo-utente',
  templateUrl: './nuovo-utente.component.html',
  styleUrls: ['./nuovo-utente.component.css']
})
export class NuovoUtenteComponent implements OnInit {
utenteModel:Utente;
utenteForm:Utente;
submitOK:boolean;
  constructor(private us :UtenteService, private router:Router) { 
    this.utenteModel =  {
      id: 0,
      nome:"",
      cognome:""
  }
  this.utenteForm = {...this.utenteModel};
  this.submitOK=false;
  }

  ngOnInit(): void {
  }
 
  onSubmit(form:NgForm):void{
      //se form valido
    //mostra alert
    //chiedere al servizio di salvare
    //reindirizzare utente
    if(form.valid){
      alert("Il form è valido");
     
      this.us.addUtenti(this.utenteForm);
      this.submitOK=true;
      this.router.navigateByUrl("/esercizio");
    }
    else{
      alert("accidenti hai qualche errore");
    }
  }
}
