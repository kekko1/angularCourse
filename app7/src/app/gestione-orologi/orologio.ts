export class Orologio{
    public get minuti(): number {
        return this._minuti;
    }
    public set minuti(value: number) {
        this._minuti = value;
    }
    public get ore(): number {
        return this._ore;
    }
    public set ore(value: number) {
        this._ore = value;
    }
    
    constructor(private _ore: number, private _minuti: number){

    }
    vediOrario():string{
        let oreStr:string =  this.ore+ "";
        let minStr:string =  this.minuti+"";
        if(oreStr.length <2)
            oreStr = "0"+oreStr;
        if(minStr.length <2)
            minStr = "0"+minStr;
        return oreStr + minStr;
    }
}