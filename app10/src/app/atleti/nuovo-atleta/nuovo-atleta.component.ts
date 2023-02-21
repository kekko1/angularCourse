import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Atleta } from 'src/app/models/atleta';
import { AtletaService } from 'src/app/services/atleta.service';

@Component({
  selector: 'app-nuovo-atleta',
  templateUrl: './nuovo-atleta.component.html',
  styleUrls: ['./nuovo-atleta.component.css']
})
export class NuovoAtletaComponent implements OnInit {

  constructor(
    private a :AtletaService,
    private router:Router
  ) { }

  ngOnInit(): void { }

  inserisci(i:any,c:any,n:any,p:any):void{
    //definisci atleta
    let nuovo :Atleta = { id:i.value, nome:n.value, cognome:c.value, punti:p.value,};
    //chiama il servizio
    this.a.inserisciAtleta(nuovo);
    // resetta i dati
    i.value="";
    c.value="";
    n.value="";
    p.value="";
    //reindirizzo
    this.router.navigateByUrl("/atleti");
  }
}