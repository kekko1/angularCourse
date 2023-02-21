import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UtenteService } from '../services/utente.service';

@Injectable({
  providedIn: 'root'
})
export class ControlloPazientiGuard implements CanActivate {
  constructor(private us : UtenteService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // autorizzato
    if(this.us.utente.autenticato){
      return true;
    }
    //errore page
    this.router.navigateByUrl("errore");
    return false;
  }

  
}
