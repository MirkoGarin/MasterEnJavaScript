$(document).ready(function () {
    //    console.log("Estamos listos!!");

    //Selector de ID
    $("#rojo").css("background", "red")
        .css("color", "white");

    $("#amarillo").css("background", "yellow")
        .css("color", "green")
        .css("font-family", "verdana");

    $("#verde").css("background", "green")
        .css("color", "white");

    //console.log(rojo);
    //console.log(amarillo);
    //zsconsole.log(verde);

    //Selector de CLASES
    var miclass = $('.zebra').css("padding", "1px");

    $('.sinborde').click(function () {
        console.log("Click dado!!!");
        $(this).addClass('zebra');

    });

    //console.log(miclass.eq(1));

    //Selector de etiquetas

    var parrafos = $('p').css("cursor", "pointer");

    parrafos.click(function () {
        var that = $(this);
        if (!that.hasClass('grande')) {

            that.addClass('grande');

        } else {

            that.removeClass('grande');
        }
    });

    // Selectores de atrigutos

    $('[title = "google"]').css('background', '#ccc');
    $('[title = "facebook"]').css('background', 'blue');

});
