class odontogram extends teeth {

 

    drawDivs(xmax, ymax) {
  
        var verticalLine = new Konva.Line({
            points: [xmax / 2, 0, xmax / 2, ymax],
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 1,
            closed: true
          });
          this.layer.add(verticalLine);
     
         var middleHorizontalLine = new Konva.Line({
            points: [0, ymax/2, xmax, ymax/2],
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 1,
            closed: true
          });
        
          var initialQuarterHOrizontal = new Konva.Line({
            points: [0, ymax/4, xmax, ymax/4],
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 1,
            closed: true
          });
          
          var finalQuarterHOrizontal = new Konva.Line({
            points: [0, ymax/4 + ymax/2, xmax,  ymax/4 + ymax/2],
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 1,
            closed: true
          });
          
         
        this.layer.add(middleHorizontalLine);
        this.layer.add(middleHorizontalLine);
        this.layer.add(initialQuarterHOrizontal);
        this.layer.add(finalQuarterHOrizontal);

        this.layer.draw();
         }



    boyOdontogram(xmax, ymax) {
        var anchoOdontogram = xmax * .85 / 2;
        var altoOdontogram = ymax / 2;
        this.drawCuadrant(xmax, ymax,  1, 0, anchoOdontogram, altoOdontogram);
        this.drawCuadrant(xmax, ymax,  2, 0, anchoOdontogram, altoOdontogram);
        this.drawCuadrant(xmax, ymax,  3, 0, anchoOdontogram, altoOdontogram);
        this.drawCuadrant(xmax, ymax,  4, 0, anchoOdontogram, altoOdontogram);
        

    }




    adultOdontogram(xmax, ymax) {
        var anchoOdontogram = xmax * .85 / 2;
        var altoOdontogram = ymax / 4;

        this.drawCuadrant(xmax, ymax,  1, 1, anchoOdontogram, altoOdontogram);
        this.drawCuadrantTitle(0+10, 0+10 , 'I');
        this.drawCuadrant(xmax * .85 / 2, ymax,  2, 1, anchoOdontogram, altoOdontogram);
        this.drawCuadrantTitle(xmax*.85/2 + 10, 0+10 , 'II');
        this.drawCuadrant(xmax, ymax,  3, 1, anchoOdontogram, altoOdontogram);
        this.drawCuadrantTitle(0 + 10, ymax/4+10 , 'IV');
        this.drawCuadrant(xmax, ymax,  4, 1, anchoOdontogram, altoOdontogram);
        this.drawCuadrantTitle(xmax*.85/2 + 10 + 10, ymax/4+10 , 'III');
    }

    drawCuadrantTitle(x, y, cuadrant)
    {
        var cuadrantTitle = new Konva.Text({
            x: x,
            y: y,
            text: cuadrant,
            fontSize: 25,
            fontFamily: 'Calibri',
            fill: 'black'
          });
          this.layer.add(cuadrantTitle);
    }

    drawCuadrant(xmax, ymax,quadrant, type, anchoCuadrante1, altoCuadrante1) {
        for (var k = 1; k < 9; k++) {
           var x =null; 
           var  y = null; 
            if (type == 0) {
                switch (quadrant) {
                    case 1:
                           
                        if (k > 3) {
                            x = (anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5); 
                            y =  altoCuadrante1 + altoCuadrante1*.25; 
                           
                        }
                        break;
                    case 2:
                        if (k < 6) {
                            x =(anchoCuadrante1 + (anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5));
                            y = altoCuadrante1 + altoCuadrante1*.25; 
                        }
                        break;

                    case 3:
                        if (k > 3) {
                            x =(anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5);
                            y =  (altoCuadrante1 / 2 + altoCuadrante1 + (altoCuadrante1*.25)); 
                        }
                        break;

                    case 4:
                        if (k < 6) {
                            x= anchoCuadrante1 + (anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5);
                            y= (altoCuadrante1 / 2) + altoCuadrante1 + (altoCuadrante1*.25);
                        }
                        break;
                }
                if(x!=null && y!=null)
                {
                   this.drawTeeth(x, y);
                }
            
            
            } else {
                switch (quadrant) {
                    case 1:
                            x =(anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5);
                            y =  altoCuadrante1 / 2; 
                            
                        break;
                    case 2:

                            x =(anchoCuadrante1 + (anchoCuadrante1 / 8 * k) - (anchoCuadrante1 / 8) * 0.5);
                            y =  altoCuadrante1 / 2; 
                        

                        break;

                    case 3:
                            x = (anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5);
                            y = (altoCuadrante1 / 2) + altoCuadrante1 ;
                                           
                            break;

                    case 4:
                            x = (anchoCuadrante1 + (anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5));
                            y = (altoCuadrante1 / 2) + altoCuadrante1 ;
                          
                       
                    break;
                }
            
                if(x!=null && y!=null)
                {
                   this.drawTeeth(x, y);
                }
            }

        }
    }}