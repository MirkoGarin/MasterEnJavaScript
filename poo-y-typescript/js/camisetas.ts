// Clases (molde del objeto)
export class Camisetas{
    //Propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;
// Metodos (funciones o acciones del objeto)

    constructor(color ,modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    public setColor(color){
        this.color = color;
    }
    public getColor(color){
        return this.color;
    }
}

//var camisetas = new Camisetas("rojo","Manga Corta","Nike","L", 159);
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



//console.log(camisetas);
