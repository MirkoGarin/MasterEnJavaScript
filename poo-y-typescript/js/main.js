"use strict";
exports.__esModule = true;
var camisetas_1 = require("./camisetas");
var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicacion Js Cargada!!!");
    }
    Main.prototype.getCamisetas = function () {
        return new camisetas_1.Camisetas("Rojo", "fafafa", "fdfs", "dfds", 12);
    };
    return Main;
}());
var main = new Main();
