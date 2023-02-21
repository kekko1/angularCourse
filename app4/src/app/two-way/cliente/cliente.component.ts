import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  cliente:any =  {
    "nome":"Marina",
    "cognome":"Verdi",
    "contratti":30
  };
 
  constructor() { }

  ngOnInit(): void {
  }

}
