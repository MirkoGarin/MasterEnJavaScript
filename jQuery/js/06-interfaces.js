$(document).ready(function () {
    // Mover elemntos por la pagina
    $('.elemento').draggable();
    //Rezize
    $('.elemento').resizable();
    //Selectable
    //$('.lista-seleccionable').selectable();
    //Ordenar 
    $('.lista-seleccionable').sortable({
        update: function (event, ui) {
            console.log(" Ha Cambiado la lista");
        }
    });
    //Droppeable
    $("#movido").draggable();
    $("#area").droppable({
        drop: function () {
            console.log("Ha sido soltado algo dentro del Area");
        }
    });
    //efectos
    $("#mostrar").click(function () {
        $(".caja-efectos").fadeToggle();
        //$(".caja-efectos").toggle("explode");
        //$(".caja-efectos").toggle("blind");
        //$(".caja-efectos").toggle("slide");
        //$(".caja-efectos").toggle("fold");
        //$(".caja-efectos").toggle("puff");
        //$(".caja-efectos").toggle("scale");
        //$(".caja-efectos").toggle("shake",3000);
    });
    //Tooltips
    $(document).tooltip();
    //Dialog
    $("#lanzar-popup").click(function() {
            $("#popup").dialog();
        });
        //Datepicker
        $("#calendario").datepicker();
    //TABS
    $("#pestanas").tabs();

});