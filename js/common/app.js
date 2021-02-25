$(function(){
	init();

	/**
	 * 初期化処理
	 */
	function init(){
		pcMenu();
		spMenu();
		initSidebarSlider();
		scrollAnimated();
	}

	/**
	 * PCメニューの固定化
	 */
	function pcMenu(){
		var $nav = $('#nav');
		var top = $nav.offset().top;
		$(window).on('scroll', function() {
			if (top <= $(this).scrollTop()) {
				$nav.addClass('is-fixed');
			}
			else{
				$nav.removeClass('is-fixed');
			}
		});
	}

	/**
	 * SPメニューのスライド設定
	 */
	function spMenu(){
		$('.sp-menu-icn, #sp-menu-wrap').click(function(){
			if($(this).hasClass('active')){
				//表示している
				$('.sp-menu-icn, #sp-menu').removeClass('active');
				setTimeout(function(){
					$('#sp-menu-wrap').removeClass('active');
				}, 400);
			}
			else{
				//非表示している
				$('#sp-menu-wrap').addClass('active');
				setTimeout(function(){
					$('.sp-menu-icn, #sp-menu').addClass('active');
				}, 100);
			}
		});
	}

	/**
	 * サイドバーのスライダー処理
	 */
	function initSidebarSlider(){
		$("#siderbar-bnrs-slider").slick({
			infinite: true,
			arrows: true, 
			dots:false,
			slidesToShow: 1,
			centerMode: true, //要素を中央寄せ
			centerPadding:'10px', //両サイドの見えている部分のサイズ
			autoplay:true
		});
	}

	/**
	 * アニメーションスクロール処理
	 */
	function scrollAnimated(){
		$(window).on('scroll', function() {
			var scrollTop = $(window).scrollTop() + window.innerHeight -(window.innerHeight/5);

			$elem = $('.animated-scroll').first();
			if(0 < $elem.length){
				var elemTop = $elem.offset().top;
				if(elemTop <= scrollTop){
					var animatedParam = $elem.data('animated');
					$('.animated-scroll').first().removeClass('animated-scroll').addClass(animatedParam);
				}
			}
		});
	}
});