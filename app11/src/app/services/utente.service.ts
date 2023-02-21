import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Utente } from '../models/utente';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {
  utente:Utente;
  constructor(private router:Router) {
    this.utente={
      username:"ospite",
      email:"",
      autenticato:false,
      admin:false
    }
  }
  autentica(username:string,password:string):void{
    //carica dal server l'utente con quello username e controlla se esiste la password
    if(username == 'pippo' && password=="123"){
      //alert("autenticato");
      //sostituisco l'utente ospite con il vero utente
      //reindirizzo alla pagina pazienti
      this.utente={
        username:username,
        email:"pippone@gmail.com",
        autenticato:true,
        admin:false
      }
      this.router.navigateByUrl("/pazienti");
    }
    else if(username == 'admin' && password=="123"){
      this.utente={
        username:username,
        email:"admin@gmail.com",
        autenticato:true,
        admin:true
      }
      this.router.navigateByUrl("/pazienti");
    }
    else{
       //(alert("non riconosciuto");
       //reindirizzo alla pagina di errore
       this.router.navigateByUrl("/errore");
    }
  }
  logout():void{
    //alert("utente disconnesso");
    this.utente={
      username:"ospite",
      email:"",
      autenticato:false,
      admin:false
    };
    this.router.navigateByUrl("");
  }
}
