document.addEventListener("mousedown",iniciarDibujo);
document.addEventListener("mousemove",dibujar);
document.addEventListener("mouseup",finDibujo);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
lienzo.fillStyle="blue";
lienzo.fillRect(1,1,300,300);
var estado =0;
//Posicion inicial para dibujar
var x,y;
//Crear bordes
dibujarLinea("black",1,1,1,300);
dibujarLinea("black",1,300,300,300);
dibujarLinea("black",1,1,300,1);
dibujarLinea("black",300,1,300,300);
//console.log(lienzo);
function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal){
	lienzo.beginPath();
	lienzo.strokeStyle=color;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function iniciarDibujo(evento){
	estado=1;
	x=evento.layerX;
	y=evento.layerY;
}
function finDibujo(evento) {
	estado=0;
	x=evento.layerX;
	y=evento.layerY;
}
function dibujar(evento){
	var colorcito = "#fff";
	var xf=evento.layerX;
	var yf=evento.layerY;
	if(estado==1){
		dibujarLinea(colorcito,x,y,xf,yf);
		x=xf;
		y=yf;	
	}
	
}