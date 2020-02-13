// Clases (molde del objeto)
var Camisetas = /** @class */ (function () {
    function Camisetas() {
    }
    // Metodos (funciones o acciones del objeto)
    Camisetas.prototype.setColor = function (color) {
        this.color = color;
    };
    Camisetas.prototype.getColor = function (color) {
        return this.color;
    };
    return Camisetas;
}());
var camisetas = new Camisetas();
camisetas.setColor("Rojo");
//camisetas.getColor();
// camisetas.color = 'rojo';
// camisetas.modelo = 'manga larga';
// camisetas.marca = 'Nike';
// camisetas.talla = 'L';
// camisetas.precio = 1000;
var playeras = new Camisetas();
playeras.setColor("Azul");
//playeras.getColor();
// playeras.color = 'azul';
// playeras.modelo = 'manga corta';
// playeras.marca = 'Adidas';
// playeras.talla = 'M';
// playeras.precio = 100;
console.log(camisetas, playeras);
