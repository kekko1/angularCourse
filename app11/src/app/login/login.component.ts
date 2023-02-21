import { Component, OnInit } from '@angular/core';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private l :UtenteService) { }

  ngOnInit(): void {
  }
  accedi(user:any,password:any): void {
    this.l.autentica(user.value,password.value)
  }
}
