(function() {
	var o = document.createElement("div");
	o.id = "sakura";
	o.innerHTML =
		'<style>html,body{overflow-x:hidden;}.hana_b{position:fixed;height:36px;width:36px;background-image:url("../images/hana/flower1.png");}.t1{border-color:#fff3f5;}.t2{border-color:#ffe2e7;}.t3{border-color:#ffd1d9;}.t4{border-color:#ffc0cb;}.t5{border-color:#ffafbd;}.t6{border-color:#ffafbd;}.t1::after{border-color:#fff3f5;}.t2::after{border-color:#ffe2e7;}.t3::after{border-color:#ffd1d9;}.t4::after{border-color:#ffc0cb;}.t5::after{border-color:#ffafbd;}.t6::after{border-color:#ffafbd;}.y1{-webkit-animation:v1 10s infinite;animation:v1 10s infinite;}.y2{-webkit-animation:v2 10s infinite;animation:v2 10s infinite;}.y3{-webkit-animation:v3 9s infinite;animation:v3 9s infinite;}.y4{-webkit-animation:v4 9s infinite;animation:v4 9s infinite;}.y5{-webkit-animation:v5 8s infinite;animation:v5 8s infinite;}.y6{-webkit-animation:v6 8s infinite;animation:v6 8s infinite;}@-webkit-keyframes v1{from{-webkit-transform: rotate(0deg) scale(1);}50%{-webkit-transform: rotate(270deg) scale(1);}to{-webkit-transform: rotate(1deg) scale(1);}}@-webkit-keyframes v2{from{-webkit-transform: rotate(-90deg) scale(.9);}50%{-webkit-transform: rotate(-360deg) scale(.9);}to{-webkit-transform: rotate(-89deg) scale(.9);}}@-webkit-keyframes v3{from{-webkit-transform: rotate(30deg) scale(.8);}50%{-webkit-transform: rotate(300deg) scale(.8);}to{-webkit-transform: rotate(29deg) scale(.8);}}@-webkit-keyframes v4{from{-webkit-transform: rotate(-120deg) scale(.7);}50%{-webkit-transform: rotate(-390deg) scale(.7);}to{-webkit-transform: rotate(-119deg) scale(.7);}}@-webkit-keyframes v5{from{-webkit-transform: rotate(60deg) scale(.6);}50%{-webkit-transform: rotate(330deg) scale(.6);}to{-webkit-transform: rotate(59deg) scale(.6);}}@-webkit-keyframes v6{from{-webkit-transform: rotate(-150deg) scale(.5);}50%{-webkit-transform: rotate(-420deg) scale(.5);}to{-webkit-transform: rotate(-149deg) scale(.5);}}@keyframes v1{from{transform: rotate(0deg) scale(1);}50%{transform: rotate(270deg) scale(1);}to{transform: rotate(1deg) scale(1);}}@keyframes v2{from{transform: rotate(-90deg) scale(.9);}50%{transform: rotate(-360deg) scale(.9);}to{transform: rotate(-89deg) scale(.9);}}@keyframes v3{from{transform: rotate(30deg) scale(.8);}50%{transform: rotate(300deg) scale(.8);}to{transform: rotate(29deg) scale(.8);}}@keyframes v4{from{transform: rotate(-120deg) scale(.7);}50%{transform: rotate(-390deg) scale(.7);}to{transform: rotate(-119deg) scale(.7);}}@keyframes v5{from{transform: rotate(60deg) scale(.6);}50%{transform: rotate(330deg) scale(.6);}to{transform: rotate(59deg) scale(.6);}}@keyframes v6{from{transform: rotate(-150deg) scale(.5);}50%{transform: rotate(-420deg) scale(.5);}to{transform: rotate(-149deg) scale(.5);}}</style>';
	document.body.appendChild(o);
	var a = window.innerHeight;
	var m = document.documentElement.scrollTop || document.body.scrollTop;
	var e = 800;
	var d = new Array();
	var j = new Array();
	var n = new Array();
	var k = new Array();
	var c = new Array();
	var l = new Array();
	var f = 0;
	document.addEventListener("scroll", function() {
		m = document.documentElement.scrollTop || document.body.scrollTop
	}, false);
	for (var h = 0; h < 15; h++) {
		var g = document.createElement("div");
		g.id = "hanabira" + h;
		d[h] = Math.random() * -1000 + m;
		j[h] = Math.random() * window.innerWidth;
		g.setAttribute("style", "z-index:" + 100 + ";top:" + d[h] + "px;left:" +
			j[h] + "px;");
		var b = "hana_b t" + (Math.floor(Math.random() * 6) + 1) + " y" + (Math.floor(
			Math.random() * 6) + 1);
		g.setAttribute("class", b);
		o.appendChild(g);
		n[h] = Math.random() * 40 + 5;
		k[h] = Math.random() * 5 + 2;
		c[h] = document.getElementById("hanabira" + h);
		l[h] = 0
	}
	setInterval(function() {
		for (var p = 0; p < 15; p++) {
			if (d[p] < m + a - 40) {
				if (n[p] >= l[p]) {
					j[p] = j[p] + 0.5 + Math.random() * 0.5
				} else {
					j[p] = j[p] - 0.5 - Math.random() * 0.5
				}
				if ((n[p] * 2) <= l[p]) {
					l[p] = 0
				}
			} else {
				d[p] = m - 40;
				j[p] = Math.random() * window.innerWidth
			}
			d[p] = d[p] + k[p];
			c[p].style.top = d[p] + "px";
			c[p].style.left = j[p] + "px";
			l[p]++
		}
		f++
	}, 45)
})();
