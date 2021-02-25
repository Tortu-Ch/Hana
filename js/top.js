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
   if($(this).scrollTop() < mes){
        $("#scene").fadeOut();
    }else if($(this).scrollTop() > endmes){
        //$("#scene").fadeOut();
        if(copy != "はな"){
        copy = "はな";
        initScene();
        }
    }else if($(this).scrollTop() > mes){
        if($("#scene").css("display") == "none" || copy !="HANA"){
        $("#scene").fadeIn();
            copy = "HANA";
        initScene();
        }
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
var canvas = document.querySelector("#scene"),
ctx = canvas.getContext("2d"),
particles = [],
amount = 0,
mouse = { x: 0, y: 0 },
radius = 1;

var colors = ["#ff688b", "#ff688b", "#ff688b", "#ff688b", "#ff688b"];

var copy = "HANA";

var ww = canvas.width = window.innerWidth;
var wh = canvas.height = window.innerHeight;
var rn = 0;
function Particle(x, y) {
  this.x = Math.random() * ww;
  this.y = Math.random() * wh;
  this.dest = {
    x: x,
    y: y };

  this.r = Math.random() * 5 + 2;
  this.vx = (Math.random() - 0.5) * 20;
  this.vy = (Math.random() - 0.5) * 20;
  this.accX = 0;
  this.accY = 0;
  this.friction = Math.random() * 0.05 + 0.94;

  this.color = colors[Math.floor(Math.random() * 6)];
}

Particle.prototype.render = function () {


  this.accX = (this.dest.x - this.x) / 1000;
  this.accY = (this.dest.y - this.y) / 1000;
  this.vx += this.accX;
  this.vy += this.accY;
  this.vx *= this.friction;
  this.vy *= this.friction;

  this.x += this.vx;
  this.y += this.vy;

  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r*1.5, Math.PI * 2, false);
  ctx.fill();

  var a = this.x - mouse.x;
  var b = this.y - mouse.y;

  var distance = Math.sqrt(a * a + b * b);
  if (distance < radius * 70) {
    this.accX = (this.x - mouse.x) / 100;
    this.accY = (this.y - mouse.y) / 100;
    this.vx += this.accX;
    this.vy += this.accY;
  }

};
/*
function onMouseMove(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

function onTouchMove(e) {
  if (e.touches.length > 0) {
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
  }
}

function onTouchEnd(e) {
  mouse.x = -9999;
  mouse.y = -9999;
}*/

function initScene() {
  ww = canvas.width = window.innerWidth;
  wh = canvas.height = window.innerHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = "bold " + ww / 4 + "px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(copy, ww / 2, wh / 2);

  var data = ctx.getImageData(0, 0, ww, wh).data;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "screen";

  particles = [];
  for (var i = 0; i < ww; i += Math.round(ww / 75)) {
    for (var j = 0; j < wh; j += Math.round(ww / 75)) {
      if (data[(i + j * ww) * 4 + 3] > 75) {
        particles.push(new Particle(i, j));
      }
    }
  }
  amount = particles.length;

}


/*
function onMouseClick() {
  radius++;
  if (radius === 5) {
    radius = 0;
  }
}*/
function rnfunc(){
    rn = 20;
    initScene();
}
function render(a) {
  requestAnimationFrame(render);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < amount; i++) {
    particles[i].render();
  }
};
          window.addEventListener("resize", rnfunc);
/*
copy.addEventListener("keyup", initScene);

window.addEventListener("mousemove", onMouseMove);
window.addEventListener("touchmove", onTouchMove);
window.addEventListener("click", onMouseClick);
window.addEventListener("touchend", onTouchEnd);*/
requestAnimationFrame(render);
//# sourceURL=pen.js
window.onload = function() {
  Particles.init({
    selector: '.background',
    sizeVariations: 30,
    color: [
      '#0bd', 'rgba(0,187,221,.5)', 'rgba(0,187,221,.2)'
    ]
  });
};
