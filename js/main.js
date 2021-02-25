(function($) {

    var $nav   = $('#navArea');
    var $btn   = $('.toggle_btn');
    var $mask = $('#mask');
    var item = $('.nav-item');
  var spnav = '.sp_nav__main_row';
  var open = 'open'; 
  var hidden = $('.hidden');
  
    
    // class
    // menu open close
    $btn.on( 'click', function() {
      if ( ! $nav.hasClass( open ) ) {
        $nav.addClass( open );
      } else {
        $nav.removeClass( open );
      }
    });
    hidden.on( 'click', function() {
      $nav.removeClass( open );
      
    });
    // mask close
    $mask.on('click', function() {
      $nav.removeClass( open );
    });
  item.on('click',function() {
    $(this).children().next(spnav).slideToggle();
  });


  $('.zoomin_ol').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      $(this).stop().addClass('zoomup');
    }
    else{
      $(this).stop().removeClass('zoomup');
    }
  });
  $('.zoomout_ol').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      $(this).stop().addClass('zoomout');
    }
    else{
      $(this).stop().removeClass('zoomout');
    }
  });

  $(".fadeIn_left").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    } else {
      $(this).stop().removeClass("is-show");
    }
  });
  $(".fadeIn_right").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show2");
    } else {
      $(this).stop().removeClass("is-show2");
    }
  });
  } )(jQuery);

//  テキストを順番にタイプしていくJS 
 
  var id = ['b','d','f']; //指定するidを全て配列で渡す
  var tx = [];
  var txCount = [];
  var txSp = 20; // テキストの表示速度
  var dly = 0; // 次の文章までの待ち時間
  var count = 0;
  
  window.onload = function(){
    message();
    countSet();
    itimozi()
  }
  
  function countSet(){ // 文字数カウントの初期設定
    for(n=0;n<id.length;n++){
      txCount[n] = 0;
    }
  }
  
  
  function message(){ // 要素を取得して非表示（opacity:0;）にする
    for(i=0;i<id.length;i++){
      id[i] = document.getElementById(id[i]);
      tx[i] = id[i].firstChild.nodeValue; // 初期の文字列
      id[i].innerHTML = '';
    }
  }
  
  function itimozi(){ //　一文字ずつ表示
    id[count].innerHTML = tx[count].substr( 0, ++txCount[count] )+"_"; // テキストの指定した数の間の要素を表示
    if(tx[count].length != txCount[count]){ // Count が初期の文字列の文字数と同じになるまでループ
      setTimeout("itimozi()",txSp); // 次の文字へ進む
    }else{
    id[count].innerHTML = tx[count].substr( 0, ++txCount[count] ); // テキストの指定した数の間の要素を表示
      count++; // 次の段落に進む為のカウントアップ
      if(count != id.length){ // id数が最後なら終了
      setTimeout("itimozi()",dly); // 次の段落へ進む
      }
    }
  }


// イメージを順番にローテーションさせていくjs
//slick.js

  $(document).ready(function(){

    var deg=-30;
  
    /* Storing all the images into a variable */
  
    var images	= $('#stage img').removeClass('default').addClass('animationReady');
    var dim		= { width:images.width(),height:images.height()};
    
    var cnt = images.length;
    
    /* Finding the centers of the animation container: */
    var centerX = $('#stage').width()/2;
    var centerY = $('#stage').height()/2 - dim.height/2;
  
    function rotate(step,total){
      // This function loops through all the phone images, and rotates them
      // with "step" degrees (10 in this implementation) until total has reached 0
    
      /* Increment the degrees: */
      deg+=step;
      
      var eSin,eCos,newWidth,newHeight,q;
      
      /* Loop through all the images: */
      for(var i=0;i<cnt;i++){
        
        /* Calculate the sine and cosine for the i-th image */
        
        q = ((360/cnt)*i+deg)*Math.PI/180;
        eSin		= Math.sin(q);
        eCos		= Math.cos(q);
        
        /*
        /	With the sine value, we can calculate the vertical movement, and the cosine 
        /	will give us the horizontal movement.
        */
        
        q = (0.6+eSin*0.4);
        newWidth	= q*dim.width;
        newHeight	= q*dim.height;
        
        /*
        /	We are using the calculated sine value (which is in the range of -1 to 1)
        /	to calculate the opacity and z-index. The front image has a sine value
        /	of 1, while the backmost one has a sine value of -1.
        */
        
        images.eq(i).css({
          top			: centerY+15*eSin,
          left		: centerX+200*eCos,
          opacity		: 0.8+eSin*0.2,
          marginLeft	: -newWidth/2,
          zIndex		: Math.round(80+eSin*20)
        }).width(newWidth).height(newHeight);
      }
  
      total-=Math.abs(step);
      if(total<=0) return false;
      
      // Setting the function to be run again in 40 seconds (equals to 25 frames per second):
      setTimeout(function(){rotate(step,total)},40);
    
    }
    
    // Running the animation once at load time (and moving the iPhone into view):
    rotate(120,360/cnt);
    
    $('#phoneCarousel .previous').click(function(){
      // 360/cnt lets us distribute the phones evenly in a circle
      rotate(-120,360/cnt);
    });
    
    $('#phoneCarousel .next').click(function(){
      rotate(120,360/cnt);
    });
    
    // Preventing selection on doubleclick
    $('#phoneCarousel .next, #phoneCarousel .previous').attr('unselectable','on')
                               .css('MozUserSelect','none')
                               .bind('selectstart',function(){return false;});
  });