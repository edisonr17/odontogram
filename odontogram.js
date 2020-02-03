class odontogram extends teeth {

    /*Esta funcion divide el plano del odontograma
    * @param xmax tamaño maximo en x
    * @param ymax tamaño maximo en y
    */  
                                                                                              
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

    /**
    * Este método retorna un array de simbolos que funcionarán de herramientas en el odontograma 
    */

    getSymbols() {
        return [{
                id: 1,
                name: "Caries",
                validations:{fullTeeth:false, onlyCenter:false,   onlyFace:true},
                src: "./resources/symbols/caries.png",
                srcIcon: "./resources/symbols/cariesIcon.png",
                tittle:"Simbolo 1"               
            },
            {
                id: 2,
                name: "Fractura",
                validations:{fullTeeth:false, onlyCenter:true,   onlyFace:false},
                src: "./resources/symbols/caries2.png",
                srcIcon: "./resources/symbols/caries3Icon.png",
                tittle:"Fractura 1"               
            },
            {
                id: 3,
                name: "Sellante",
                validations:{fullTeeth:false, onlyCenter:false,   onlyFace:false},
                src: "./resources/symbols/caries3.png",
                srcIcon: "./resources/symbols/caries3Icon.png",
                tittle:"Sellante 1"               
            },
            {
                id: 4,
                name: "Caries",
                validations:{fullTeeth:false, onlyCenter:false,   onlyFace:false},
                src: "./resources/symbols/toolsExample.png",
                srcIcon: "./resources/symbols/toolsExampleIcon.png",
                tittle:"Caries 2"               
            },
            {
                id: 5,
                name: "Fractura",
                validations:{fullTeeth:false, onlyCenter:false,   onlyFace:false},
                src: "./resources/symbols/implante.png",
                srcIcon: "./resources/symbols/implanteIcon.png",
                tittle:"Fractura de otro tipo 3"               
            },
            {
                id: 6,
                name: "poroso",
                validations:{fullTeeth:false, onlyCenter:false,   onlyFace:false},
                src: "./resources/symbols/fractura.png",
                srcIcon: "./resources/symbols/fracturaIcon.png",
                tittle:"Poroso 4"               
            }
        ];
    }

    

  
    /** 
     * trae la configuración grafica del simbolo
     * @param x coordenada en x inicial
     * @param y coordenada en y inicial
     * @param symbol nodo del objeto con los datos de configuracion del simbolo.
     * @param position es el número del bucle que construye el cuadro de herramientas.
     * 
    */
    getItemTool(x,y, symbol,  position){
        var widthIcon = 35;
        var heightIcon =35;
        var imageObj = new Image();
        var layer = this.layer;
        var stage =this.stage;
        var toolsInstance = this;
        imageObj.onload = function () {
            var tool = new Konva.Image({
                x: x,
                y: y,
                image: imageObj,
                width: widthIcon,
                fill: "blue",
                stroke: "blue",
                
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
                this.stroke("blue");
                this.scaleY(1);
                this.scaleX(1);
                this.moveToBottom();
                this.draw();
                stage.draw();
                document.getElementById("contenedor").style.cursor = 'default';
          
              });
              tool.on('mouseover', function (evt) {
                this.stroke("black");
                this.scaleY(2);
                this.scaleX(2);
                this.moveToTop();
                toolsInstance.setTittle(symbol.tittle);
                document.getElementById("contenedor").style.cursor = 'pointer';
               
                this.draw();
                stage.draw();


              });

              tool.on('click', function (evt) {
                toolsInstance.setCurrentBackground(symbol.srcIcon);
                toolsInstance.setCurrentSymbol(symbol);
                toolsInstance.getInstanceImageBackground(symbol.srcIcon);
                this.stroke("black");
                this.scale(1);
                
                document.getElementById("contenedor").style.cursor = 'pointer';
               
                this.draw();
              });

              var fillPatternImage = tool.fillPatternImage();

                
               

            layer.add(tool);
            // add the layer to the stage
            stage.add(layer);
        }
        imageObj.src = symbol.src;
        return imageObj;
    }

    tittle = null;


    drawTools(xinitial, yinitial, xmax, ymax, columns) {
        //cargamos array de simbolos
        var symbols = this.getSymbols();
        this.tittle = new Konva.Text({
            x: xinitial,
            y: yinitial-20,
            
            width: 300,
            stroke: 'black',
            strokeWidth: 1,
            fill: 'blue',
            fontSize: 17,
            cornerRadius: 1,
            shadowColor: 'black',
            shadowBlur: 0,
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            shadowOpacity: 0.2,
          });
         

        this.layer.add(this.tittle);
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

           
 


            

        }









        






    }

     
    



    getTittle(){
        return this.tittle;
    }

    setTittle(message) {
        this.tittle.text(message);
        this.layer.draw();
    }


    boyOdontogram(xinitial, yinitial, xmax, ymax) {
        var anchoOdontogram = xmax * .85 / 2;
        var altoOdontogram = ymax / 2;
        this.drawCuadrant(xmax, ymax, 1, yinitial, anchoOdontogram, altoOdontogram);
        this.drawCuadrantTitle(0 + 10, ymax / 2 + 10, 'I - Odontograma de Niño');
        this.drawCuadrant(xmax, ymax, 2, yinitial, anchoOdontogram, altoOdontogram);
        this.drawCuadrantTitle(xmax * .85 / 2 + 10, ymax / 2 + 10, 'II');
        this.drawCuadrant(xmax, ymax, 3, yinitial, anchoOdontogram, altoOdontogram);
        this.drawCuadrantTitle(0 + 10, ymax / 4 + ymax / 2 + 10, 'IV');
        this.drawCuadrant(xmax, ymax, 4, yinitial, anchoOdontogram, altoOdontogram);
        this.drawCuadrantTitle(xmax * .85 / 2 + 10, ymax / 4 + ymax / 2 + 10, 'III');



    }




    adultOdontogram(xinitial, yinitial, xmax, ymax) {
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