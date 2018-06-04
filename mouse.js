var d = document.getElementById("areaDibujo");
var lienzo = d.getContext("2d"); //para trabajar en el area de dibujo 

dibujarLinea("black", 0, 0, 0, d.height);
dibujarLinea("black", 0, d.height, d.width, d.height);
dibujarLinea("black", d.width, 0, d.width, d.height);
dibujarLinea("black", 0, 0, d.width, 0);// el area de dibujo delineada

d.addEventListener("mousedown", presionarClick);
d.addEventListener("mousemove", movimiento);
d.addEventListener("mouseup", liberarClick);


var x;
var y;
var presion;// ve si el click esta presionado

function movimiento(evento)
{        
    if(presion == true)// si paso por la funcion de presionarClick()
    {
        dibujarLinea("blue", x, y, evento.clientX, evento.clientY);//dibuja desde el punto donde se presiona hasta donde se mueve

    }
    x = evento.clientX;
    y = evento.clientY; 
}

function presionarClick(evento)
{       
    presion = evento.isTrusted;
}

function liberarClick(evento)
{
    presion = false;
}
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}