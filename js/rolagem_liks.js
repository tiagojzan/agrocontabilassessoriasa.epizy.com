/// VER FORMA DE COLOCAR LINK NO HEADER !!!!!
/////// ROLAGEM SUAVE PELO SITE LINKS \\\\\\\\\\\

// Selecione todos os links com hashes
$('a[href*="#"]')
    // Remova links que realmente não ligam para nada
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // Links na página
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Descobrir o elemento para se deslocar
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Existe um alvo de rolagem?
            if (target.length) {
                // Apenas evite o padrão se a animação realmente acontecer
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Ligar de volta após a animação
                    // Deve mudar de foco!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Verificando se o alvo estava focado
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); //Adicionando tab index para elementos não focáveis
                        $target.focus(); // Defina o foco novamente
                    };
                });
            }
        }
    });