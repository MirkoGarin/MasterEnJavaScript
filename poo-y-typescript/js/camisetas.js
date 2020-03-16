"use strict";
exports.__esModule = true;
// Clases (molde del objeto)
var Camisetas = /** @class */ (function () {
    // Metodos (funciones o acciones del objeto)
    function Camisetas(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camisetas.prototype.setColor = function (color) {
        this.color = color;
    };
    Camisetas.prototype.getColor = function (color) {
        return this.color;
    };
    return Camisetas;
}());
exports.Camisetas = Camisetas;
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
