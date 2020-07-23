
function myFunction(x) {
  x.classList.toggle("change");

}


$(document).ready(function () {
  var alturaDivTxt2 = $('#banner').height();
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > alturaDivTxt2) {
      $("#menu").addClass("bgc-white");
      $("#logo1").addClass("d-none");
      $("#logo1").removeClass("d-block");
      $("#logo2").addClass("d-block");
      $("#logo2").removeClass("d-none");
      $(".nav-link").addClass("c-dark-gray");
      $(".bar1").addClass("bgc-dark-gray");
      $(".bar2").addClass("bgc-dark-gray");
      $(".bar3").addClass("bgc-dark-gray");
    } else {
      $("#menu").removeClass("bgc-white");
      $("#logo1").removeClass("d-none");
      $("#logo1").addClass("d-block");
      $("#logo2").removeClass("d-block");
      $("#logo2").addClass("d-none");
      $(".nav-link").removeClass("c-dark-gray");
      $(".bar1").removeClass("bgc-dark-gray");
      $(".bar2").removeClass("bgc-dark-gray");
      $(".bar3").removeClass("bgc-dark-gray")
    }
  });
});






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


























































// function detectar_mobile() { 
//   if( navigator.userAgent.match(/Android/i)
//   || navigator.userAgent.match(/webOS/i)
//   || navigator.userAgent.match(/iPhone/i)
//   || navigator.userAgent.match(/iPad/i)
//   || navigator.userAgent.match(/iPod/i)
//   || navigator.userAgent.match(/BlackBerry/i)
//   || navigator.userAgent.match(/Windows Phone/i)
//   ){
     
//      $(document).ready(function(){
//       $("button").click(function(){
//         $("div").animate({left: '250px'});
//       });
//     });
//    }
//   else {
//      return false;
//    }
//  }






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
$('#click-cases').on('click', function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
  targetOffset = $(id).offset().top;
    
  $('html, body').animate({ 
    scrollTop: targetOffset - 50
  }, 500);
});
$('#click-quem-somos').on('click', function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
  targetOffset = $(id).offset().top;
    
  $('html, body').animate({ 
    scrollTop: targetOffset - 50
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




particlesJS("particles-js", { "particles": { "number": { "value": 308, "density": { "enable": true, "value_area": 1815.039575754227 } }, "color": { "value": "#ffffff" }, "shape": { "type": "polygon", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 6 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 1, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 4, "size_min": 0.3, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.03945738208161363, "width": 1 }, "move": { "enable": true, "speed": 1, "direction": "top", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 600 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3 }, "repulse": { "distance": 400, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;



/* ---- particles.js config ---- */

// particlesJS("particles-js", {
//     particles: {
//       number: {
//         value: 120,
//         density: {
//           enable: true,
//           value_area: 800
//         }
//       },
//       color: {
//         value: ["#ffffff"]
//       },
//       shape: {
//         type: ["circle"],
//         stroke: {
//           width: 0,
//           color: "#fff"
//         },
//         polygon: {
//           nb_sides: 5
//         },
//         image: {
//           src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
//           width: 100,
//           height: 100
//         }
//       },
//       opacity: {
//         value: 1,
//         random: false,
//         anim: {
//           enable: false,
//           speed: 1,
//           opacity_min: 0.1,
//           sync: false
//         }
//       },
//       size: {
//         value: 3,
//         random: true,
//         anim: {
//           enable: false,
//           speed: 10,
//           size_min: 10,
//           sync: false
//         }
//       },
//       line_linked: {
//         enable: true,
//         distance: 150,
//         color: "#ffffff",
//         opacity: 0.2,
//         width: 1
//       },
//       move: {
//         enable: true,
//         speed: 5,
//         direction: "none",
//         random: false,
//         straight: false,
//         out_mode: "out",
//         bounce: false,
//         attract: {
//           enable: false,
//           rotateX: 600,
//           rotateY: 1200
//         }
//       }
//     },
//     interactivity: {
//       detect_on: "canvas",
//       events: {
//         onhover: {
//           enable: true,
//           mode: "grab"
//         },
//         onclick: {
//           enable: true,
//           mode: "push"
//         },
//         resize: true
//       },
//       modes: {
//         grab: {
//           distance: 140,
//           line_linked: {
//             opacity: 1
//           }
//         },
//         bubble: {
//           distance: 400,
//           size: 40,
//           duration: 2,
//           opacity: 8,
//           speed: 3
//         },
//         repulse: {
//           distance: 200,
//           duration: 0.4
//         },
//         push: {
//           particles_nb: 4
//         },
//         remove: {
//           particles_nb: 2
//         }
//       }
//     },
//     retina_detect: true
//   });
