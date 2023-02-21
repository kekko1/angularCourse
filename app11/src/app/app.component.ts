import { Component } from '@angular/core';
import { Utente } from './models/utente';
import { UtenteService } from './services/utente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app11';
  constructor(private us:UtenteService){

  }
  get utente():Utente{
    return this.us.utente;
  }
  logout():void{
    //chiedo al servizio di disconnettere l'utente
    this.us.logout();
  }
}
