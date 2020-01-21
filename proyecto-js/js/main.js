$(document).ready(function () {

    //slider
    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            caption: false,
            autoControls: true,
            slideWidth: 1200,
            responsive: true,
            pager: true
        });
    }
    // POSTs
    if (window.location.href.indexOf('index') > -1) {
        var posts = [{
            title: 'Titulo 1',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel bibendum neque. Proin lobortis pretium nulla, non venenatis dui placerat quis. Quisque ante augue, pulvinar ut tincidunt at, consectetur eget ante. Proin tempus massa vitae pretium suscipit. Donec at elit mattis, sagittis ligula et, venenatis augue.'
        }, {
            title: 'Titulo 2',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel bibendum neque. Proin lobortis pretium nulla, non venenatis dui placerat quis. Quisque ante augue, pulvinar ut tincidunt at, consectetur eget ante. Proin tempus massa vitae pretium suscipit. Donec at elit mattis, sagittis ligula et, venenatis augue.'
        }, {
            title: 'Titulo 3',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel bibendum neque. Proin lobortis pretium nulla, non venenatis dui placerat quis. Quisque ante augue, pulvinar ut tincidunt at, consectetur eget ante. Proin tempus massa vitae pretium suscipit. Donec at elit mattis, sagittis ligula et, venenatis augue.'
        }, {
            title: 'Titulo 4',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel bibendum neque. Proin lobortis pretium nulla, non venenatis dui placerat quis. Quisque ante augue, pulvinar ut tincidunt at, consectetur eget ante. Proin tempus massa vitae pretium suscipit. Donec at elit mattis, sagittis ligula et, venenatis augue.'
        }, {
            title: 'Titulo 5',
            date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + " del " + moment().format("YYYY"),
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel bibendum neque. Proin lobortis pretium nulla, non venenatis dui placerat quis. Quisque ante augue, pulvinar ut tincidunt at, consectetur eget ante. Proin tempus massa vitae pretium suscipit. Donec at elit mattis, sagittis ligula et, venenatis augue.'
        }, ];
        posts.forEach((item, index) => {
            var post = `  
            <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>${item.contenido}</p>
            <a href="#" class="button-more">Leer Mas</a>
        </article
        `;
            $("#posts").append(post);
        });
    }
    //selector de temas  
    var theme = $("#theme");
    $("#to-green").click(function () {
        theme.attr("href", "css/green.css");
    });
    $("#to-red").click(function () {
        theme.attr("href", "css/red.css");
    });
    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css");
    });
    // Scroll arriba de la web  
    $('.subir').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    // Login falso
    $("#login form").submit(function () {
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);

    });
    var form_name = localStorage.getItem("form_name");
    if (form_name != null && form_name != "undefine") {
        var about_parrafo = $("#about p");
        $("#about p").html("<br><strong>Bienvenido, " + form_name + "</strong>");
        about_parrafo.append("<a href='#' id= 'logout'>Cerrar Sesion</a>");
        $("#login").hide();

        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        });
    }
    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    }
    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(function () {
            var reloj = moment().format("h:mm:ss");
            $('#reloj').html(reloj);
        }, 1000);
    }
    //Validacion
    if (window.location.href.indexOf('contact') > -1) {
        
        $("form input[name = 'date']").datepicker({

            dateFormat: 'dd-mm-yyyy';
        });
        $.validate({
            lang: 'es';
        });
        $.validate({
            modules : 'date';
          });
    }

});
