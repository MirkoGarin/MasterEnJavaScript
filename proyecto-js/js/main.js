$(document).ready(function(){
    
    $('.bxslider').bxSlider({
        auto: false,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 1200
      });

// POSTs
var posts =[{
    title: 'Titulo 1',
    date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
    contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel bibendum neque. Proin lobortis pretium nulla, non venenatis dui placerat quis. Quisque ante augue, pulvinar ut tincidunt at, consectetur eget ante. Proin tempus massa vitae pretium suscipit. Donec at elit mattis, sagittis ligula et, venenatis augue.'
},{
    title: 'Titulo 2',
    date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
    contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel bibendum neque. Proin lobortis pretium nulla, non venenatis dui placerat quis. Quisque ante augue, pulvinar ut tincidunt at, consectetur eget ante. Proin tempus massa vitae pretium suscipit. Donec at elit mattis, sagittis ligula et, venenatis augue.'
},{
    title: 'Titulo 3',
    date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
    contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel bibendum neque. Proin lobortis pretium nulla, non venenatis dui placerat quis. Quisque ante augue, pulvinar ut tincidunt at, consectetur eget ante. Proin tempus massa vitae pretium suscipit. Donec at elit mattis, sagittis ligula et, venenatis augue.'
},{
    title: 'Titulo 4',
    date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
    contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel bibendum neque. Proin lobortis pretium nulla, non venenatis dui placerat quis. Quisque ante augue, pulvinar ut tincidunt at, consectetur eget ante. Proin tempus massa vitae pretium suscipit. Donec at elit mattis, sagittis ligula et, venenatis augue.'
},{
    title: 'Titulo 5',
    date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + " del " + moment().format("YYYY"),
    contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel bibendum neque. Proin lobortis pretium nulla, non venenatis dui placerat quis. Quisque ante augue, pulvinar ut tincidunt at, consectetur eget ante. Proin tempus massa vitae pretium suscipit. Donec at elit mattis, sagittis ligula et, venenatis augue.'
},
];
    posts.forEach((item, index) =>{
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
        


});