// String
let cadena: string | number= "Mirko Garin";
cadena= 44;


// NUmber
let numero: number = 12;

// booleano
let booleano: boolean= true;

//Any
let cualquiera: any = "hola";

//Arrays
var lenguajes: Array<string> = ["PHP", "JS", "CSS"];
let years: number[] = [12,5,8,6];

//
type letraboolean = string | boolean;
let caden: letraboolean = true;

//let alcance del bloque
//var a nivel global

//lets vs var

var numero1 = 10;
var numero2 = 12;

 if (numero1 == 10){
     let numero1 = 44;
     var numero2 = 55;
    console.log(numero1, numero2);
 }

 console.log(numero1, numero2);

//console.log(cadena,numero, booleano, cualquiera, lenguajes, years, caden);