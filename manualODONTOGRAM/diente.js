function draw(X, Y, r, lineWidth, mainLineWidth, insideColor) {
    var elCanvas = document.getElementById("canvas");
    var context = elCanvas.getContext("2d");
       

        context.beginPath();
            context.strokeStyle = "black";
            context.fillStyle = "black";
            context.lineWidth = mainLineWidth;
            context.arc(X,Y,r+6.6,0,2*Math.PI);
            context.fill();
            context.stroke();
        context.closePath();


        context.beginPath();
            context.strokeStyle = "black";
            context.fillStyle = "white";
            context.lineWidth = mainLineWidth;
            context.arc(X,Y,r/1.8,0,2*Math.PI);
            context.fill();
            context.stroke();
        context.closePath();


        context.beginPath();
            var aPartida = ((Math.PI / 180) * -43);
            var aFinal =  ((Math.PI / 180) * 43);
            context.strokeStyle =insideColor;
            context.lineWidth = lineWidth;
            context.arc(X,Y,r,aPartida,aFinal,false);
            context.stroke();
        context.closePath();

        context.beginPath();
        var aPartida = (Math.PI / 180) * 47;
        var aFinal =  (Math.PI / 180) * 133;
        context.strokeStyle = insideColor;
        context.lineWidth = lineWidth;
        context.arc(X,Y,r,aPartida,aFinal,false);
        context.stroke();
        context.closePath();


        context.beginPath();
            var aPartida = (Math.PI / 180) * 137;
            var aFinal =  (Math.PI / 180) * 223;
            context.strokeStyle = insideColor;
            context.lineWidth = lineWidth;
            context.arc(X,Y,r,aPartida,aFinal,false);
            context.stroke();
        context.closePath();

        context.beginPath();
            var aPartida = (Math.PI / 180) * 227;
            var aFinal =  (Math.PI / 180) * 313;
            context.strokeStyle = insideColor;
            context.lineWidth = lineWidth;
            context.arc(X,Y,r,aPartida,aFinal,false);
            context.stroke();
        context.closePath();



        var middleX = elCanvas.width;
        var middleY = elCanvas.height;


        context.beginPath();
            context.strokeStyle = "black";
            context.fillStyle = "black";
            context.lineWidth = mainLineWidth;
            context.moveTo(middleX/2, 0);
            context.lineTo(middleX/2, middleY);
            context.stroke();
        context.closePath();


        context.beginPath();
            context.strokeStyle = "black";
            context.fillStyle = "black";
            context.lineWidth = mainLineWidth;
            context.moveTo(0,middleY/2);
            context.lineTo(middleX, middleY/2);
            context.stroke();
        context.closePath();

    }



    
    function radians(grados){
     return grados * Math.PI / 180;
    }





  
    
    var init = 40;

    for(var k=40;k < init * 12; k = k + 60)
    {
        draw(k,50, 20, 10,0.5, "#DA96D7" );
      
    }

    var init = 40;
  
    for(var k=40;k < init * 12; k = k + 60)
    {
        draw(k,50, 20, 10,0.5, "#DA96D7" );
     
    }

  

    
    for(var k=40;k < init * 12; k = k + 60)
    {
        draw(k,150, 20, 10,0.5,"#6592D1" );
    }