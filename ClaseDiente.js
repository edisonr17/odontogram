class Teeth {
    constructor(Canvas, Context) {

    }

    drawMainCircle(X, Y, r, lineWidth, mainLineWidth, insideColor) {
        context.beginPath();
        context.strokeStyle = "black";
        context.fillStyle = "black";
        context.lineWidth = mainLineWidth;
        context.arc(X, Y, r + 6.6, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
        context.closePath();
    }

    drawArc(X, Y, r, lineWidth, mainLineWidth, insideColor, initialAng, finalAng) {
        context.beginPath();
        var aPartida = (Math.PI / 180) * initialAng;
        var aFinal = (Math.PI / 180) * finalAng;

        context.strokeStyle = insideColor;
        context.lineWidth = lineWidth;
        context.arc(X, Y, r, aPartida, aFinal, false);
        context.stroke();
        context.closePath();
    }

    drawCenterArc(X, Y, r, lineWidth, mainLineWidth, insideColor) {
        context.beginPath();
        context.strokeStyle = "black";
        context.fillStyle = "white";
        context.lineWidth = mainLineWidth;
        context.arc(X, Y, r / 1.8, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
        context.closePath();

    }


    drawTeeth(X, Y, r, lineWidth, mainLineWidth, insideColor) {


        var middleX = elCanvas.width;
        var middleY = elCanvas.height;

        this.drawMainCircle(X, Y, r, lineWidth, mainLineWidth, insideColor);
        this.drawCenterArc(X, Y, r, lineWidth, mainLineWidth, insideColor);

        //Top
        this.drawArc(X, Y, r, lineWidth, mainLineWidth, "#58FAF4", 227, 313);
        //Left
        this.drawArc(X, Y, r, lineWidth, mainLineWidth, '#F781D8', 137, 223);
        //Right
        this.drawArc(X, Y, r, lineWidth, mainLineWidth, '#D8F781', -43, 43);
        //Botton
        this.drawArc(X, Y, r, lineWidth, mainLineWidth, '#F79F81', 47, 133);

    }

}


//definicion del canvas de odontograma de adulto


























var clickedQuadrant1 = false;
var clickedQuadrant2 = false;
var clickedQuadrant4 = false;
var clickedQuadrant3 = false;


function selectedQuadrant(Xi, Xf, Yi, Yf, clear, quadrant){
    if(!clear)
    {
      
        clearSelectdQuadrant(Xi, Xf, Yi, Yf, quadrant);
      
    }
    else
    {
       /* context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "#00f";
        context.strokeRect(Xi,  Yi, Xf, Yf);
        context.stroke();
        context.closePath();*/
    }
  
} 


function clearSelectdQuadrant(Xi, Xf, Yi, Yf, quadrant){
    context.beginPath();


    switch(quadrant)
    {
        case 1:
        
           
            break;
        case 2:
            
            break;
        case 3:
            
            break;
        case 4:
          
            break;
    }

    context.closePath();
}