import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, observable, of, range, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  // dichiaro la sottoscrizione per l'esempio 3
  sub3:Subscription;
  sub5:Subscription;

  constructor() {
    this.sub3= new Subscription();
    this.sub5= new Subscription();
  }

  ngOnInit(): void {
  }

  esempio1():void{
    console.clear();
    console.log("esempio1");
    //definisco uno stream di elementi numerici 
    // genera una sequenza di...
    const observable = of(10,20,30,40,50);
    //dichiaro le tre funzioni attive all'atto della sottoscrzione
    function next(x:any){ console.log("valore:" +x);};
    function error(e:any){ console.log("si è verificato un erore"+ e)};
    function complete(){console.log("terminata");};
    // dichiaro un observer e li passo le funzioni
    const observer ={next,error,complete};
    console.log("prima subscription");
    observable.subscribe(observer);
    console.log("dopo subscription");
    console.log("-----------------");
  }


  esempio2():void{
    console.clear();
    console.log("esempio1");
    //definisco uno stream di elementi numerici 
    // genera una sequenza di...
    const observable = of(10,20,30,40,50,0);
    // dichiaro un observer definendo le funzioni al suo interno
    const observer ={
      next      : (x:any) => {
        if (x != 0) { console.log("valore diviso per 0:" + 10/x) }
        else { throw new Error("non puoi dividere per 0"); }
      },
      error     : (e:any) => console.log("si è verificato un erorre:" +e),
      complete  : () =>console.log("terminata")
    };
   
    console.log("prima subscription");
    observable.subscribe(observer);
    console.log("dopo subscription");

    // altro esempio dopve definisco l'oggetto observer durante la sottoscrizione
    observable.subscribe(
      (x) => console.log("valore moltiplicato per 0:" + 10*x),
      (e) => console.log("si è verificato un erorre:" +e),
      () =>console.log("terminata")
    );

    /*all'atto dell'iscrizione ho definito le tre istruzioni e 
    RxJS ha capito che si trattava di next, error, complete 
    (azione deprecata si consigli di definire a priori un observer)
    */
    
    console.log("-----------------");
  }
  esempio3(n:number):void{
   


    if( n  ==0 )
    { 
      console.clear();
      console.log("esempio3");
      const observable = interval(1000);
      this.sub3 = observable.subscribe(
        (x) => console.log(x)
      );

    }
    else{
      //fermo la subscrition
      this.sub3.unsubscribe();
      console.log("annulla");
    }
  }

  esempio4():void{
    console.clear();
    console.log("esempio4");
    const nomi:string[] = [
      "luca","mario","antonio","felipe"
    ];
    const observable = from(nomi);
    observable.subscribe(
      x=>console.log(x)
    );
    console.log("----");
  }
  esempio5(n:number):void{
    if(n  == 0 ){
      console.clear();
      console.log("esempio5");
      const observable = fromEvent(document, "click")
      this.sub5 = observable.subscribe(
        x=>console.log(x)
      );
    }
    else{
      this.sub5.unsubscribe();
    }
  }
  esempio6():void{
    console.clear();
    console.log("esempio6");
   
    const observable = range(1,10);
    observable.subscribe(
      x=>console.log(x)
    );
    console.log("----");
  }
}
