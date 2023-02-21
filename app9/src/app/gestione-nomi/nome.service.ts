import { Injectable } from "@angular/core";
import { nomi } from "../data/nomi";

@Injectable({
    //inietto il servizio a livello globale
    providedIn: "root"
})
export class NomeService {

    getElencoNomi() :string[]{
        return nomi;
    }
    addNome(n:string) :void{
        //this.getElencoNomi().push(n);
        nomi.push(n);
    }
}

