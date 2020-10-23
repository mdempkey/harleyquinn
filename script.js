var a = document.getElementById("bats");
var b = document.getElementById("legoivy");
var c = document.getElementById("legojoker");
var d = document.getElementById("batgirl");
var e = document.getElementById("bane");
var f = document.getElementById("legoquinn");
var g = document.getElementById("quinn");
var h = document.getElementById("logo");
var i = document.getElementById("logo2");
var j = document.getElementById("logo3");
var k = document.getElementById("j");
var l = document.getElementById("harl");
var q = 0

function plyVid(){
	document.getElementById('play').muted = false;
	document.getElementById('play1').classList.add("none");
}

function Timer(){
    document.getElementById('next').classList.remove("none"); 
}

setTimeout(Timer,9050);

function movePic(){
	h.src="images/winlogo1.png";
	a.classList.remove("pulse");
	q++
	youWin()
}

function movePic1(){
	i.src="images/winlogo1.png";
	c.classList.remove("pulse");
	q++
	youWin()
}

function movePic2(){
	j.src="images/winlogo1.png";
	e.classList.remove("pulse");
	q++
	youWin()
}

function youWin(){
	if(q == 3){
	k.src="images/download.png";
	h.classList.add("shine");
	i.classList.add("shine");
	j.classList.add("shine");
	g.classList.remove("none");
	g.autoplay = true;
	g.load();
	a.classList.add("none");
	b.classList.add("none");
	c.classList.add("none");
	d.classList.add("none");
	e.classList.add("none");
	f.classList.add("none");
	l.src="images/harlivy.png";
	}
}


window.onload = choosePic;

var myPix = new Array("images/bane.png","images/catwomen.png");
var myPix1 = new Array("images/batgirl.png","images/clayface.png");
var myPix2 = new Array("images/bats.png","images/alfred.png");
var myPix3 = new Array("images/legoivy.png","images/scare.png");
var myPix4 = new Array("images/legojoker.png","images/2face.png");
var myPix5 = new Array("images/legoquinn.png","images/robin.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     e.src = myPix[randomNum];
	 var randomNum = Math.floor(Math.random() * myPix1.length);
     d.src = myPix1[randomNum];
	  var randomNum = Math.floor(Math.random() * myPix2.length);
     a.src = myPix2[randomNum];
	  var randomNum = Math.floor(Math.random() * myPix3.length);
     b.src = myPix3[randomNum];
	  var randomNum = Math.floor(Math.random() * myPix4.length);
     c.src = myPix4[randomNum];
	  var randomNum = Math.floor(Math.random() * myPix5.length);
     f.src = myPix5[randomNum];
Timer();
}
