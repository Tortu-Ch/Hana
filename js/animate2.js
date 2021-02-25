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
  $('.moblock').each( function() {
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