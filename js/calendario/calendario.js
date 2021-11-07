  /*=========== JAN  ==========*/
  $(document).ready(function() {
      $("#mesJAN").click(function() {
          $("#diasJAN").slideToggle("slow");

      });
  });
  /*===========FEV  ==========*/
  $(document).ready(function() {
      $("#mesFEV").click(function() {
          $("#diasFEV").slideToggle("slow");
      });
  });
  /*=========== MAR  ==========*/
  $(document).ready(function() {
      $("#mesMAR").click(function() {
          $("#diasMAR").slideToggle("slow");
      });
  });
  /*=========== ABRIL  ==========*/
  $(document).ready(function() {
      $("#mesABR").click(function() {
          $("#diasABR").slideToggle("slow");
      });
  });
  $(document).ready(function() {
      $("#mesMAI").click(function() {
          $("#diasMAI").slideToggle("slow");
      });
  });
  $(document).ready(function() {
      $("#mesJUN").click(function() {
          $("#diasJUN").slideToggle("slow");
      });
  });
  $(document).ready(function() {
      $("#mesJUL").click(function() {
          $("#diasJUL").slideToggle("slow");
      });
  });
  $(document).ready(function() {
      $("#mesAGO").click(function() {
          $("#diasAGO").slideToggle("slow");
      });
  });
  $(document).ready(function() {
      $("#mesSET").click(function() {
          $("#diasSET").slideToggle("slow");
      });
  });
  $(document).ready(function() {
      $("#mesOUT").click(function() {
          $("#diasOUT").slideToggle("slow");
      });
  });
  $(document).ready(function() {
      $("#mesNOV").click(function() {
          $("#diasNOV").slideToggle("slow");
      });
  });
  $(document).ready(function() {
      $("#mesDEZ").click(function() {
          $("#diasDEZ").slideToggle("slow");
      });
  });

  ///////////////////////////////////////////////////////////////////////////////
  //       ABRIR JANELA DO CALENDÁRIO E REDIMENSIONAR
  ///////////////////////////////////////////////////////////////////////////////

  var janela;

  function abrirJanela() {
      janela = window.open("calendário simples.html", "pagina", "width=1200, height=650");
  }
  // Redimensiona só no EDGE, não no CHROME e Mozzila
  function redimensinarJanela() {
      janela.resizeTo(600, 650);
      janela.focus();
  }


  ///////////////////////////////////////////////////////////////////////////////
  //       P   O   P   U   P   S
  ///////////////////////////////////////////////////////////////////////////////

  $(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip();
  });

  function newPopup15() {
      varWindow = window.open(
          'popups/popup15.html',
          'pagina',
          "width=350, height=255, top=100, left=110, scrollbars=no ");
  }

  function newPopup9() {
      varWindow = window.open(
          'popups/popup9.html',
          'pagina',
          "width=350, height=255, top=100, left=110, scrollbars=no ");
  }

  function newPopup5pdf() {
      varWindow = window.open(
          'popups/popup5.pdf',
          'pagina',
          "width=650, height=555, top=100, left=200, scrollbars=no ");
  }

  function newPopup5() {
      varWindow = window.open(
          'popups/popup5.xhtml',
          'pagina',
          "width=650, height=555, top=100, left=200, scrollbars=no ");
  }