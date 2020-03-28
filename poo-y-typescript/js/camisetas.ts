//Interfaces
interface CamisetaBase{
    setColor(color);
    getColor();
}
//Decorador
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camista estampaga con el logo de : " + logo );
        }
    }
}


// Clases (molde del objeto)
@estampar("Gucci Gang") 
 class Camiseta implements CamisetaBase{
    //Propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;
// Metodos (funciones o acciones del objeto)

    constructor(color , modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    public setColor(color){
        this.color = color;
    }
    public getColor(){
        return this.color;
    }
}

class Sudadera extends Camiseta{
    public capucha: boolean;
    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }
    getCapucha():boolean{
        return this.capucha;
    }
}

var camiseta = new Camiseta("rojo","Manga Corta","Nike","L", 159);
camiseta.estampacion();
console.log(camiseta);


var sudadera = new Sudadera("rojo","Manga Corta","Nike","m", 159);
sudadera.setCapucha(true);
sudadera.setColor("Gris Jaspeado");
console.log(sudadera);

//camisetas.setColor("Violeta"); 
//camisetas.getColor();
// camisetas.color = 'rojo';
// camisetas.modelo = 'manga larga';
// camisetas.marca = 'Nike';
// camisetas.talla = 'L';
// camisetas.precio = 1000;

//var playeras = new Camisetas();
//playeras.setColor("Azul");
//playeras.getColor();
// playeras.color = 'azul';
// playeras.modelo = 'manga corta';
// playeras.marca = 'Adidas';
// playeras.talla = 'M';
// playeras.precio = 100;
