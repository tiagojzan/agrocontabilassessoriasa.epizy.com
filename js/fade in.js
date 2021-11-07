/////// FADE IN - APARECE E DESAPARECE ELEMENTOS SITE \\\\\\\\\\\
$(window).on("load", function() {
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".scroll_fade_in_out").each(function() {
            /* Verifique a localização de cada elemento desejado */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            /* Se o elemento estiver completamente dentro dos limites da janela, desvaneça-o */
            if (objectBottom < windowBottom) { //O objeto entra em exibição (deslizando para baixo)
                if ($(this).css("opacity") == 0) {
                    $(this).fadeTo(500, 1); //500 = velocidade do fade in
                }
            } else { //O objeto fica fora de exibição (deslizando para cima)
                if ($(this).css("opacity") == 1) {
                    $(this).fadeTo(500, 0);
                }
            }
        });
    }).scroll(); //invocar scroll-handler na página-carregar
});