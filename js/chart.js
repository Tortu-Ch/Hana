$(function(){
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
var function trends() {

    var ctx = document.getElementById("trend").getContext('2d');
    var myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels:  ["2016/3", "2017/3", "2018/3", "2019/3", "2020/3"],
            datasets: [
                {
                    label: "系列Ａ",
                    data: [10, 20,  5, 15, 10],
                    backgroundColor: ["#2e3d83", "#2e3d83", "#2e3d83", "#2e3d83", "#ff688b"] ,   // 個々の棒の色
                    borderColor: "black",  // 棒の枠線
                    borderWidth: 1         // 枠線の太さ
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                fontSize: 20,
            },
            legend: {
                display: false,
            },                
            scales: {
                yAxes: [ // Ｙ軸のオプション
                    {
                        ticks: {
                            min: 0
                        }
                    }
                ]
            }

        }
    });
}

    // スクロール処理
    var graphAnim = function() {
        var wy = window.pageYOffset,
            //wb = wy + screen.height - 300, // スクリーンの最下部位置を取得
                wb = wy + window.innerHeight, // ブラウザの最下部位置を取得

          // チャートの位置を取得
            chartElPos1 = wy + chartEl1.getBoundingClientRect().top + 300;

        // チャートの位置がウィンドウの最下部位置を超えたら起動
        if ( wb > chartElPos1 && chartFlag1 == false ) {
            chartFunc1();
            chartFlag1 = true;
        }
    };

window.addEventListener('load', graphAnim); // 読み込み時の処理
window.addEventListener('scroll', graphAnim); // スクロール時の処理


});