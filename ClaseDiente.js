class Teeth {
    constructor(Canvas,Context) {
    
    }

    drawMainCircle(X, Y, r, lineWidth, mainLineWidth, insideColor){
        context.beginPath();
        context.strokeStyle = "black";
        context.fillStyle = "black";
        context.lineWidth = mainLineWidth;
        context.arc(X,Y,r+6.6,0,2*Math.PI);
        context.fill();
        context.stroke();
        context.closePath();
    }

    drawArc(X, Y, r, lineWidth, mainLineWidth, insideColor, initialAng, finalAng){
        context.beginPath();
        var aPartida = (Math.PI / 180) * initialAng;
        var aFinal =  (Math.PI / 180) * finalAng;
       
        context.strokeStyle = insideColor;
        context.lineWidth = lineWidth;
        context.arc(X,Y,r,aPartida,aFinal,false);
        context.stroke();
        context.closePath();
    }

    drawCenterArc(X, Y, r, lineWidth, mainLineWidth, insideColor){
        context.beginPath();
        context.strokeStyle = "black";
        context.fillStyle = "white";
        context.lineWidth = mainLineWidth;
        context.arc(X,Y,r/1.8,0,2*Math.PI);
        context.fill();
        context.stroke();
        context.closePath();

    }


    drawTeeth(X, Y, r, lineWidth, mainLineWidth, insideColor){


        var middleX = elCanvas.width;
        var middleY = elCanvas.height;

        this.drawMainCircle(X, Y, r, lineWidth, mainLineWidth, insideColor);
        this.drawCenterArc(X, Y, r, lineWidth, mainLineWidth, insideColor);

        //Top
        this.drawArc(X, Y, r, lineWidth, mainLineWidth, "#58FAF4", 227, 313);
        //Left
        this.drawArc(X, Y, r, lineWidth, mainLineWidth, '#F781D8', 137, 223);
        //Right
        this.drawArc(X, Y, r, lineWidth, mainLineWidth, '#D8F781',-43 ,43);
        //Botton
        this.drawArc(X, Y, r, lineWidth, mainLineWidth, '#F79F81', 47, 133);

    }

}

var elCanvas = document.getElementById("canvas");
var context = elCanvas.getContext("2d");

var TeethInstance = new Teeth(elCanvas, context);




var init = 40;


var middleX = elCanvas.width;
var middleY = elCanvas.height;


context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.lineWidth = 2;
    context.moveTo(middleX/2, 0);
    context.lineTo(middleX/2, middleY);
    context.stroke();
context.closePath();


context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.lineWidth = 2;
    context.moveTo(0,middleY/4);
    context.lineTo(middleX, middleY/4);
    context.stroke();
context.closePath();


context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.lineWidth = 2;
    context.moveTo(0,middleY/2);
    context.lineTo(middleX, middleY/2);
    context.stroke();
context.closePath();


context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.lineWidth = 2;
    context.moveTo(0,(middleY/4)*3);
    context.lineTo(middleX, (middleY/4)*3);
    context.stroke();
context.closePath();

console.log("Ancho del canvas x " + middleX);
console.log("Ancho del canvas y "+ middleY);

var anchoCuadrante1 = middleX/2;
var altoCuadrante1 = middleY/4;

for(var k=1;k<9;k++)
{
    TeethInstance.drawTeeth((anchoCuadrante1/8*k)-((anchoCuadrante1/8)*0.5),altoCuadrante1/2, 20, 10,0.5, "#DA96D7" );
}
context.fillStyle="black"; //color de relleno
context.font="bold 20px arial"; //estilo de texto
context.fillText("Cuadrante 1",anchoCuadrante1/3,altoCuadrante1/5);

for(var k=1;k<9;k++)
{
    TeethInstance.drawTeeth((anchoCuadrante1+(anchoCuadrante1/8*k)-((anchoCuadrante1/8)*0.5)),altoCuadrante1/2, 20, 10,0.5, "#DA96D7" );
}

context.fillStyle="black"; //color de relleno
context.font="bold 20px arial"; //estilo de texto
context.fillText("Cuadrante 2",(anchoCuadrante1/3)+anchoCuadrante1,altoCuadrante1/5);



for(var k=1;k<9;k++)
{
    TeethInstance.drawTeeth((anchoCuadrante1/8*k)-((anchoCuadrante1/8)*0.5),(altoCuadrante1/2)+altoCuadrante1, 20, 10,0.5, "#DA96D7" );
}
context.fillStyle="black"; //color de relleno
context.font="bold 20px arial"; //estilo de texto
context.fillText("Cuadrante 4",anchoCuadrante1/3,(altoCuadrante1/5)+altoCuadrante1);



for(var k=1;k<9;k++)
{
    TeethInstance.drawTeeth((anchoCuadrante1+(anchoCuadrante1/8*k)-((anchoCuadrante1/8)*0.5)),(altoCuadrante1/2)+altoCuadrante1, 20, 10,0.5, "#DA96D7" );
}
context.fillStyle="black"; //color de relleno
context.font="bold 20px arial"; //estilo de texto
context.fillText("Cuadrante 3",anchoCuadrante1+anchoCuadrante1/3,(altoCuadrante1/5)+altoCuadrante1);


adultQuadrant(quadrant)
{

}