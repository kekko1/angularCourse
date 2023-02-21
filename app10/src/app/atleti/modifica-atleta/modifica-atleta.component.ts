import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atleta } from 'src/app/models/atleta';
import { AtletaService } from 'src/app/services/atleta.service';

@Component({
  selector: 'app-modifica-atleta',
  templateUrl: './modifica-atleta.component.html',
  styleUrls: ['./modifica-atleta.component.css']
})
export class ModificaAtletaComponent implements OnInit {

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

     let id  = Number( this.route.snapshot.paramMap.get("id")) ;
    //chiedo l servizio l'atleta e lo sostitisco
    this.atleta = this.ats.getAtletaById(id);

    // se non c'e reindirizzo
    if(this.atleta== undefined){
      this.router.navigateByUrl("atleti");
    }
  }
  modifica(c:any,n:any,p:any):void{
    let atletaModificato :Atleta = { id:this.atleta.id, nome:n.value, cognome:c.value, punti:p.value,};
    //chiama il servizio
    this.ats.modificaAtleta(atletaModificato);
   
    //reindirizzo
    this.router.navigateByUrl("/atleti/"+this.atleta.id);
  }

}
