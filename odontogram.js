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
            points: [0, ymax / 2, xmax, ymax / 2],
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 1,
            closed: true
        });

        var initialQuarterHOrizontal = new Konva.Line({
            points: [0, ymax / 4, xmax, ymax / 4],
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 1,
            closed: true
        });

        var finalQuarterHOrizontal = new Konva.Line({
            points: [0, ymax / 4 + ymax / 2, xmax, ymax / 4 + ymax / 2],
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

    getSymbols() {
        return [{
                id: 1,
                name: "Caries",
                fullTeeth: false,
                src: "./resources/symbols/caries.png",
                tittle:"Simbolo 1"               
            },
            {
                id: 2,
                name: "Fractura",
                fullTeeth: false,
                src: "./resources/symbols/caries2.png",
                tittle:"Simbolo 1"               
            },
            {
                id: 3,
                name: "Sellante",
                fullTeeth: false,
                src: "./resources/symbols/caries3.png",
                tittle:"Simbolo 1"               
            },
            {
                id: 4,
                name: "Caries",
                fullTeeth: false,
                src: "./resources/symbols/toolsExample.png",
                tittle:"Simbolo 1"               
            },
            {
                id: 5,
                name: "Fractura",
                fullTeeth: false,
                src: "./resources/symbols/implante.png",
                tittle:"Simbolo 1"               
            },
            {
                id: 6,
                name: "poroso",
                fullTeeth: false,
                src: "./resources/symbols/fractura.png",
                tittle:"Simbolo 1"               
            }
        ];
    }
  
  
    getItemTool(x,y, symbol,  position){
        var widthIcon = 35;
        var heightIcon =35;
        var imageObj = new Image();
        var layer = this.layer;
        var stage =this.stage;
        imageObj.onload = function () {
            var tool = new Konva.Image({
                x: x,
                y: y,
                image: imageObj,
                width: widthIcon,
                fill: "pink",
                stroke: "pink",
                height: heightIcon,
                draggable: false,
                name: "tools"+position,
               
             /*   shadowColor: 'black',
                shadowBlur: 0,
                shadowOffset: { x: 1, y: 3 },*/
                tittle: symbol.tittle,
                
            });
            // add the shape to the layer
            //group.add(yoda);
            tool.on('mouseleave', function (evt) {
                this.stroke("pink");
                this.scaleX(1);
                this.scaleY(1);
                this.draw();
                document.getElementById("contenedor").style.cursor = 'default';
          
              });
              tool.on('mouseover', function (evt) {
                this.stroke("black");
                this.scaleX(1.03);
                this.scaleY(1.03);
              
                document.getElementById("contenedor").style.cursor = 'pointer';
               
                this.draw();


              });

              var fillPatternImage = tool.fillPatternImage();

                
               

            layer.add(tool);
            // add the layer to the stage
            stage.add(layer);
        };
        imageObj.src = symbol.src;
        return imageObj;
    }




    drawTools(xinitial, yinitial, xmax, ymax, columns) {
        //cargamos array de simbolos
        var symbols = this.getSymbols();
        //Contamos cuantos simbolos hay
        var symbolsCount = symbols.length;
        //calculamos la distancia en x en el que vamos a dibujar las herramientas
        var xdistance = xmax - xinitial;
        //calculamos la medida de un lado de la columna
        var longColumn = xdistance / columns;

        var columnaActual = 1;
        var filaActual = 1;
        var layer = this.layer;
        var stage = this.stage;
        var images = [];
        yinitial = yinitial + 20;
        xinitial = xinitial ;
        var xinitialCalculated = xinitial ;
        var yinitialCalculated = yinitial ;

        for (var location = 0; location < symbolsCount ; location++) {


            if(columnaActual < columns )
            {       
             
                if(columnaActual == 1 )
                {
                    xinitialCalculated = xinitial;
                    console.log("entro");

                }
               
                   

          
                images[location] = this.getItemTool(xinitialCalculated, yinitialCalculated, symbols[location], location);
                xinitialCalculated = xinitialCalculated+longColumn * .8;
                columnaActual = columnaActual + 1;
            }
            else
            {

                images[location] = this.getItemTool(xinitialCalculated, yinitialCalculated, symbols[location], location);

                yinitialCalculated = yinitialCalculated + longColumn; 
                columnaActual = 1;

            }

           
            //Si la columna actual es menor que el numero de columnas maximo
            /*if(columnaActual <= columns)
            {
                if(columnaActual > 1 )
                {
                   
                    xinitialCalculated = xinitialCalculated+longColumn;
                   
                }
                else
                {   
                    xinitialCalculated = xinitial;
                    
                }
                columnaActual = columnaActual + 1;
                images[i] = this.getItemTool(xinitialCalculated, yinitialCalculated, symbols[i].src);
            }
            else
            {
                filaActual = filaActual+1;
                yinitialCalculated = yinitialCalculated + longColumn; 
                xinitialCalculated = xinitial;
                columnaActual = 1;
                images[i] = this.getItemTool(xinitialCalculated, yinitialCalculated, symbols[i].src);
            }
*/
           


            

        }
















    }







    boyOdontogram(xmax, ymax) {
        var anchoOdontogram = xmax * .85 / 2;
        var altoOdontogram = ymax / 2;
        this.drawCuadrant(xmax, ymax, 1, 0, anchoOdontogram, altoOdontogram);
        this.drawCuadrantTitle(0 + 10, ymax / 2 + 10, 'I - Odontograma de Niño');
        this.drawCuadrant(xmax, ymax, 2, 0, anchoOdontogram, altoOdontogram);
        this.drawCuadrantTitle(xmax * .85 / 2 + 10, ymax / 2 + 10, 'II');
        this.drawCuadrant(xmax, ymax, 3, 0, anchoOdontogram, altoOdontogram);
        this.drawCuadrantTitle(0 + 10, ymax / 4 + ymax / 2 + 10, 'IV');
        this.drawCuadrant(xmax, ymax, 4, 0, anchoOdontogram, altoOdontogram);
        this.drawCuadrantTitle(xmax * .85 / 2 + 10, ymax / 4 + ymax / 2 + 10, 'III');



    }




    adultOdontogram(xmax, ymax) {
        var anchoOdontogram = xmax * .85 / 2;
        var altoOdontogram = ymax / 4;

        this.drawCuadrant(xmax, ymax, 1, 1, anchoOdontogram, altoOdontogram);
        this.drawCuadrantTitle(0 + 10, 0 + 10, 'I - Odontograma Adulto');
        this.drawCuadrant(xmax * .85 / 2, ymax, 2, 1, anchoOdontogram, altoOdontogram);
        this.drawCuadrantTitle(xmax * .85 / 2 + 10, 0 + 10, 'II');
        this.drawCuadrant(xmax, ymax, 3, 1, anchoOdontogram, altoOdontogram);
        this.drawCuadrantTitle(0 + 10, ymax / 4 + 10, 'IV');
        this.drawCuadrant(xmax, ymax, 4, 1, anchoOdontogram, altoOdontogram);
        this.drawCuadrantTitle(xmax * .85 / 2 + 10, ymax / 4 + 10, 'III');
    }

    drawCuadrantTitle(x, y, cuadrant) {
        var cuadrantTitle = new Konva.Text({
            x: x + 15,
            y: y,
            text: cuadrant,
            fontSize: 15,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var check = new Konva.Rect({
            x: x,
            y: y,
            width: 10,
            height: 10,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 1
        });

        check.on("mouseover", function () {
            document.getElementById("contenedor").style.cursor = 'pointer';
        });

        check.on("mouseleave", function () {

            document.getElementById("contenedor").style.cursor = 'default';

        });


        this.layer.add(cuadrantTitle);
        this.layer.add(check);

    }

    drawCuadrant(xmax, ymax, quadrant, type, anchoCuadrante1, altoCuadrante1) {
        for (var k = 1; k < 9; k++) {
            var x = null;
            var y = null;
            if (type == 0) {
                switch (quadrant) {
                    case 1:

                        if (k > 3) {
                            x = (anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5);
                            y = altoCuadrante1 + altoCuadrante1 * .25;

                        }
                        break;
                    case 2:
                        if (k < 6) {
                            x = (anchoCuadrante1 + (anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5));
                            y = altoCuadrante1 + altoCuadrante1 * .25;
                        }
                        break;

                    case 3:
                        if (k > 3) {
                            x = (anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5);
                            y = (altoCuadrante1 / 2 + altoCuadrante1 + (altoCuadrante1 * .25));
                        }
                        break;

                    case 4:
                        if (k < 6) {
                            x = anchoCuadrante1 + (anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5);
                            y = (altoCuadrante1 / 2) + altoCuadrante1 + (altoCuadrante1 * .25);
                        }
                        break;
                }
                if (x != null && y != null) {
                    this.drawTeeth(x, y);
                }


            } else {
                switch (quadrant) {
                    case 1:
                        x = (anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5);
                        y = altoCuadrante1 / 2;

                        break;
                    case 2:

                        x = (anchoCuadrante1 + (anchoCuadrante1 / 8 * k) - (anchoCuadrante1 / 8) * 0.5);
                        y = altoCuadrante1 / 2;


                        break;

                    case 3:
                        x = (anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5);
                        y = (altoCuadrante1 / 2) + altoCuadrante1;

                        break;

                    case 4:
                        x = (anchoCuadrante1 + (anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5));
                        y = (altoCuadrante1 / 2) + altoCuadrante1;


                        break;
                }

                if (x != null && y != null) {
                    this.drawTeeth(x, y);
                }
            }

        }
    }
}