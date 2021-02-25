// JavaScript Document
var EffectH = 150;
$(window).on('scroll load', function() {
  var scTop = $(this).scrollTop();
  var scBottom = scTop + $(this).height();
  var effectPos = scBottom - EffectH;
  $('.move').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
			// .js-scrollという要素が可視範囲に入ったら
      $.when(
				// .js-scrollにshowというclassを付与
        $(this).addClass("active")
      ).done(function() {
				//  その後、0.5秒遅らせて.js-scrollにdoneというclassを付与
        $(this).delay(600).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });
  $('.move2').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
          $(this).addClass("active2")
      ).done(function() {
        $(this).delay(1200).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });
  $('.move3').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
          $(this).addClass("active3")
      ).done(function() {
        $(this).delay(1800).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });
  $('.move4').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
          $(this).addClass("active4")
      ).done(function() {
        $(this).delay(2400).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });
  $('.move5').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
          $(this).addClass("active5")
      ).done(function() {
        $(this).delay(3000).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });
});
particlesJS("particles", {
  "particles": {
    "number": {
      "value": 355,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.6,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 20,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
