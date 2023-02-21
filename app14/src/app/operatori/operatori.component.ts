import { Component, OnInit } from '@angular/core';
import { from, map, range, skip, take, tap } from 'rxjs';

@Component({
  selector: 'app-operatori',
  templateUrl: './operatori.component.html',
  styleUrls: ['./operatori.component.css']
})
export class OperatoriComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  esempio1(): void {

    console.clear();
    console.log("esempio1 Operatore Map");
    const observable = range(1,10);
    // se usiamo il pipe e per fare modifiche alla sequenza iniziale
    // esegue map nella pipe
    observable.pipe(
      map(x => x * 2 )
    ).subscribe (x => console.log(x) );

    console.log("---------");
  }
  esempio2(): void {

    console.clear();
    console.log("esempio2 Operatore Map con cambio di tipo dato");

    const colori:string[]=[
      "rosso","giallo"
    ];
    const observable = from(colori);
    // se usiamo il pipe e per fare modifiche alla sequenza iniziale
    // esegue map nella pipe
    // da stringa a numero
    observable.pipe(
      map(c => c.length)
    ).subscribe(
      x => console.log(x)
    );

    /* siccome l'operazione di subscribe consuma gli elementi della sequenza,
    posso effettuare operazioni diverse dalla semplice stampa */

    const lunghezze:number[]=[];
    observable.pipe(
      map(c => c.length)
    ).subscribe(
      x => {lunghezze.push(x);console.log(x)}
    );

    console.log(lunghezze);

    console.log("---------");
  }
  esempio3(): void {

    console.clear();
    console.log("esempio2 Operatore Map consecutivi");

    const clienti :any[]=[
      {
        nome:"pino",
        cognome:"abete"
      }
    ];
    const observable = from(clienti);
      observable.pipe(
      map(c => c.nome),
      map(n => n.toUpperCase())
    ).subscribe(
      x => {console.log(x)}
    );
    
      console.log("---------");
    }
  esempio4(): void {

    console.clear();
    console.log("esempio4 Tap");
    const clienti :any[]=[
      {
        nome:"pino",
        cognome:"abete"
      }
    ];
      const observable = from(clienti);
        observable.pipe(
          tap(c => console.log(c.nome+ " "+ c.cognome)),// esegue funzioni senza alterare il dato
          map(d => d.nome),
          map(n => n.toUpperCase())
        ).subscribe(
          x => {console.log(x)}
        );
      
    console.log("---------");
  }

  esempio5(): void {

    console.clear();
    console.log("esempio5 Operatore Take");
    const observable = range(1,10);
    
    observable.pipe(
      take(5),// prendi solo i primi 5
      map (x => x*2)
    ).subscribe (x => console.log(x) );

    console.log("---------");
  }
  esempio6(): void {

    console.clear();
    console.log("esempio6 Operatore skip");
    const observable = range(1,10);
    
    observable.pipe(
      skip(5),// scarta i primi 5 numeri
      map (x => x*2)
    ).subscribe (x => console.log(x) );

    console.log("---------");
  }

}
