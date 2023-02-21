import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atleta } from 'src/app/models/atleta';
import { AtletaService } from 'src/app/services/atleta.service';

@Component({
  selector: 'app-dettaglio-atleta',
  templateUrl: './dettaglio-atleta.component.html',
  styleUrls: ['./dettaglio-atleta.component.css']
})
export class DettaglioAtletaComponent implements OnInit {

  atleta:Atleta;
  constructor(
    private ats:AtletaService,
    private route:ActivatedRoute,
    private router: Router
  ) {
    this.atleta=  {
      id:1,
      nome:"test",
      cognome:"test",
      punti:9999
    };
   }

  ngOnInit(): void {
    //recupero id dall indirizzo
   
    let id  = Number( this.route.snapshot.paramMap.get("id")) ;
    //chiedo l servizio l'atleta e lo sostitisco
    this.atleta = this.ats.getAtletaById(id);

    // se non c'e reindirizzo
    if(this.atleta== undefined){
      this.router.navigateByUrl("atleti");
    }
  }
  elimina(id:any):void{
    this.ats.eliminaAtleta(id);

  }
}
