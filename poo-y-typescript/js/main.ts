import { Camisetas } from './camisetas';

class Main{
    constructor(){
        console.log("Aplicacion Js Cargada!!!");
    }
    getCamisetas(){

        return new Camisetas("Rojo", "fafafa", "fdfs", "dfds", 12)
    }
}
var main = new Main();