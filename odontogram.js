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
                src: "./resources/symbols/caries.png"
            },
            {
                id: 2,
                name: "Fractura",
                fullTeeth: false,
                src: "./resources/symbols/caries2.png"
            },
            {
                id: 3,
                name: "Sellante",
                fullTeeth: false,
                src: "./resources/symbols/caries3.png"
            },
            {
                id: 4,
                name: "Caries",
                fullTeeth: false,
                src: "./resources/symbols/caries.png"
            },
            {
                id: 5,
                name: "Fractura",
                fullTeeth: false,
                src: "./resources/symbols/caries2.png"
            },
            {
                id: 6,
                name: "Sellante",
                fullTeeth: false,
                src: "./resources/symbols/caries3.png"
            }
        ];
    }
    drawForExample() {
        var layer = this.layer;
        var stage =this.stage;
        var symbols = this.getSymbols();
        var images = [];
        for (var i = 0; i < 4; i++) {
            var nextposition = i * 20 + 100;
            images[i] = this.getItemTool(1,1, symbols[i].src);
          
        }
    }


    getItemTool(x,y, src){
        var imageObj = new Image();
        var layer = this.layer;
        var stage =this.stage;
        imageObj.onload = function () {
            var yoda = new Konva.Image({
                x: x,
                y: y,
                image: imageObj,
                width: 35,
                height: 31,
                draggable: true,
                name: "yoda" 
            });
            // add the shape to the layer
            //group.add(yoda);

            layer.add(yoda);
            // add the layer to the stage
            stage.add(layer);
        };
        imageObj.src = src;
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
        var xinitialCalculated = xinitial;
        var yinitialCalculated = yinitial;


        for (var i = 0; i < symbolsCount; i++) {
            //Si la columna actual es menor que el numero de columnas maximo
            if(columnaActual < columns)
            {
                images[i] = this.getItemTool(1,1, symbols[i].src);
            }
            else
            {
                
            }

           


            

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