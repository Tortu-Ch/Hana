$(function(){
    var navPos = jQuery( '#navArea' ).offset().top; // グローバルメニューの位置
    var navHeight = jQuery( '#navArea' ).outerHeight(); // グローバルメニューの高さ
    var mes = jQuery('#message_section').offset().top;
    var endmes = jQuery('#business_content').offset().top;
    $("#scene").hide();
    jQuery( window ).on( 'scroll', function() {
    if ( jQuery( this ).scrollTop() > (navPos + 80) ) {
    jQuery( '#navArea' ).removeClass( 'topfirst' );
    } else {
    jQuery( '#navArea' ).addClass( 'topfirst' );
    }

    });
    var chartEl1 = document.getElementById("chart1");
    var chartFlag1 = false;
        // 1つ目のグラフ
    var chartFunc1 = function() {
        var ctx = chartEl1.getContext('2d');
          ctx.canvas.height = 400;
        chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Data1","Data2"],
                datasets: [{
                  label: "",
                data: [53, 47],
                backgroundColor: [
                        '#FF688B',
                        '#2E3D83',
                    ]
                }]
            },
            options: {
                title: {
                display: false
                },
                 legend: {
                    display: false
                 },
                layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
        }
                
    }
        });
    };

    // スクロール処理
//    var graphAnim = function() {
//        var wy = window.pageYOffset,
//            //wb = wy + screen.height - 300, // スクリーンの最下部位置を取得
//                wb = wy + window.innerHeight, // ブラウザの最下部位置を取得
//
//          // チャートの位置を取得
//            chartElPos1 = wy + chartEl1.getBoundingClientRect().top + 300;
//
//        // チャートの位置がウィンドウの最下部位置を超えたら起動
//        if ( wb > chartElPos1 && chartFlag1 == false ) {
//            chartFunc1();
//            chartFlag1 = true;
//        }
//    };

//window.addEventListener('load', graphAnim); // 読み込み時の処理
//window.addEventListener('scroll', graphAnim); // スクロール時の処理


});
