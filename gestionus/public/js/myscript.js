/*------------------------
INICIAMOS WOW
-------------------------*/
new WOW().init();

/*----------------------------------
Iniciamos smoothScroll (Scroll Suave)
--------------------------------*/
smoothScroll.init({
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    offset: 100, // Integer. How far to offset the scrolling anchor location in pixels

});



/*---------------------------------
   CERRAR NAV + FORMLOGIN CUANDO HACEMOS Click y posicionarnos arriba
 ----------------------------------*/

$(function(){ 
    var navMain = $("#menu-principal");
    var login = $("#bloque-buscar");

    navMain.on("click", "a", null, function () {
        navMain.collapse('hide'); // CERRAR NAV 
        login.collapse('hide'); // CERRAR FORMLOGIN
        $(document).scrollTop( $("#Header").offset().top );  //posicionarnos arriba
    });  
});


/*---------------------------------
    OCULTAR Y MOSTRAR BOTON IR ARRIBA
    NOTA: Lo dejamos quieto en el footeer

$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".ir-arriba").fadeIn();
        } else {
            $(".ir-arriba").fadeOut();
        }
    });

});
 ----------------------------------*/
 
/*---------------------------------
   CABECERA ANIMADA: Cambio en el fondo de menú Header cuando estabamos más del 80% hacia abajo. 
   ----------------------------------*/
 
$(window).scroll(function () {
    var nav = $('.encabezado');
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        nav.addClass("fondo-menu");
    } else {
        nav.removeClass("fondo-menu");
    }
});
