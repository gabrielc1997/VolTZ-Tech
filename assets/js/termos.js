
function myFunction(x) {
    x.classList.toggle("change");
  
  }
  
  

  
  
  
  
  
  
  $(document).ready(function () {
  
    $("#abre-menu").click(function () {
      if ($('nav').hasClass('nav-aberto')) {
        $('nav').removeClass('nav-aberto');
        $("#click-servicos").animate({position: 'absolute', left: '250px'});
    } else {
      $("nav").addClass("nav-aberto");
     }
    });
  
  });
  
  $(document).ready(function () {
  
    $(".nav-link").click(function () {
      if ($('nav').hasClass('nav-aberto')) {
        $('nav').removeClass('nav-aberto');
        $('#abre-menu').addClass('collapsed');
        myFunction(x);
  
    } else {
      
     }
    });
  
  });
  
  
  
  
  
  
  
  
  
  
  $('#click-servicos').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
      
    $('html, body').animate({ 
      scrollTop: targetOffset - 35
    }, 500);
  });
  $('#click-banner').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
      
    $('html, body').animate({ 
      scrollTop: targetOffset - 50
    }, 500);
  });
  
  $('#click-funciona').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
      
    $('html, body').animate({ 
      scrollTop: targetOffset + 1
    }, 500);
  });
  
  $('#click-contato').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
      
    $('html, body').animate({ 
      scrollTop: targetOffset - 50
    }, 500);
  });
  
  
  
  
