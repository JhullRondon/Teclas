//script para la detencion de eventos del teclado
var teclas = { 
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var d = document.getElementById("areaDibujo");
var lienzo = d.getContext("2d"); //para trabajar en el area de dibujo 
var x = d.width / 2; //coodenada x inicial
var y = d.height / 2; //coordenada y inicial


document.addEventListener("keyup", dibujarTeclado);

dibujarLinea("black", 0, 0, 0, d.height);
dibujarLinea("black", 0, d.height, d.width, d.height);
dibujarLinea("black", d.width, 0, d.width, d.height);
dibujarLinea("black", 0, 0, d.width, 0);
dibujarLinea("blue", d.height/ 2 - 1, d.height/2 - 1, d.height/ 2 + 1, d.height/2 + 1);

function dibujarTeclado(evento)
{
    switch(event.keyCode)
    {
        case teclas.DOWN:
        dibujarLinea("blue", x, y, x, y + 15);
        y = y + 15;
        break;        
        case teclas.UP: 
        dibujarLinea("blue", x, y, x, y - 15);
        y = y - 15;
        break;
        case teclas.LEFT:
        dibujarLinea("blue", x, y, x - 15, y);
        x = x - 15;
        break;
        case teclas.RIGHT: 
        dibujarLinea("blue", x, y, x + 15, y);
        x = x + 15;
        break;        
    }
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