import{ Component } from '@angular/core';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'  

})
export class ZapatillasComponent{
    public titulos: string = "Componente zapatillas!";
    public listado: string;
    constructor(){
         
        console.log("Se ha cargado el componente: videojuego.component.ts");
    }
} 