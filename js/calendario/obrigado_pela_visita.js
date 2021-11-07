    //  window.onbeforeunload = function(e) {

    //        return 'Tem a certeza que quer fechar a janela? ENTRE EM CONTATO CONOSCO!';

    //    };

    //    window.onbeforeunload = function(e) {

    //        setTimeout(function() {

    //            document.getElementById('obrigado').style.display = 'block';

    //        }, 1000);

    //        return 'Tem a certeza que quer fechar a janela? ENTRE EM CONTATO CONOSCO!';

    //    };

    window.onbeforeunload = function obrigado_pela_visita() {

        varWindow = window.open(

            'obrigado_pela_visita.html',

            'pagina',

            "width=730, height=280, top=100, left=110, scrollbars=no ");

    }



    // window.addEventListener("beforeunload", function(event) {

    //     event.returnValue = "Tem a certeza que quer fechar a janela? ENTRE EM CONTATO CONOSCO!";

    // });
