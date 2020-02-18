  class QuadrantClass extends TeethClass {


      drawCuadrant(xmax, ymax, quadrant, type, anchoCuadrante1, altoCuadrante1, quadrantObject) {
          for (var k = 1; k < 9; k++) {
              var x = null;
              var y = null;
              if (type == 0) {
                  var start = k;
                  switch (quadrant) {
                      case 1:

                          if (k > 3) {
                              x = (anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5);
                              y = altoCuadrante1 + altoCuadrante1 * 0.25;
                            start =  k - 4;
                          }
                          break;
                      case 2:
                          if (k < 6) {
                              x = (anchoCuadrante1 + (anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5));
                              y = altoCuadrante1 + altoCuadrante1 * 0.25;
                              start =  k-1 ;
                          }
                          break;

                      case 3:
                          if (k > 3) {
                              x = (anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5);
                              y = (altoCuadrante1 / 2 + altoCuadrante1 + (altoCuadrante1 * 0.25));
                              start =  k - 4;
                          }
                          break;

                      case 4:
                          if (k < 6) {
                              x = anchoCuadrante1 + (anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5);
                              y = (altoCuadrante1 / 2) + altoCuadrante1 + (altoCuadrante1 * 0.25);
                              start =  k-1 ;
                          }
                          break;
                  }
                  if (x != null && y != null) {
                      if(quadrantObject.teeths[start] != undefined)
                      {
                        this.drawTeeth(x, y, quadrantObject.teeths[start]);

                      }
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
                   
                      this.drawTeeth(x, y, quadrantObject.teeths[k-1]);
                  }
              }

          }
      }




      drawCuadrantTitle(x, y, cuadrant) {
          var teethInstance = this;
          var click = false;
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
              strokeWidth: 3
          });

          check.on("mouseover", function () {
              document.getElementById("contenedor").style.cursor = 'pointer';
          });

          check.on("mouseleave", function () {

              document.getElementById("contenedor").style.cursor = 'default';

          });

          check.on("click", function(){
            if(click == false)
            {
                this.fill("blue");
                this.stroke("gray");

                click = true;
            }
            else
            {
                this.fill("white");
                this.stroke("black");

                click = false;
            }
            teethInstance.stage.draw();
          });


          this.layer.add(cuadrantTitle);
          this.layer.add(check);

      }



      /**
       * Este método retorna un array de simbolos que funcionarán de herramientas en el odontograma 
       */

      getSymbols() {
          return [{
                  id: 1,
                  name: "Caries",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false,
                  },
                  src: "./resources/symbols/marcas/Imagen4.png",
                  srcIcon: "./resources/symbols/marcas/Imagen4_icon.png",
                  tittle: "Simbolo 1"
              },
              {
                  id: 2,
                  name: "Fractura",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen5.png",
                  srcIcon: "./resources/symbols/marcas/Imagen5_icon.png",
                  tittle: "Fractura 1"
              },
              {
                  id: 3,
                  name: "Sellante",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen6.png",
                  srcIcon: "./resources/symbols/marcas/Imagen6_icon.png",
                  tittle: "Sellante 1"
              },
              {
                  id: 4,
                  name: "Caries",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen7.png",
                  srcIcon: "./resources/symbols/marcas/Imagen7_icon.png",
                  tittle: "Caries 2"
              },
              {
                  id: 5,
                  name: "Fractura",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen8.png",
                  srcIcon: "./resources/symbols/marcas/Imagen8_icon.png",
                  tittle: "Fractura de otro tipo 3"
              },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen9.png",
                  srcIcon: "./resources/symbols/marcas/Imagen9_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 7,
                  name: "poroso",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen10.png",
                  srcIcon: "./resources/symbols/marcas/Imagen10_icon.png",
                  tittle: "Poroso 4"
              },
              {
                id: 8,
                name: "poroso",
                validations: {
                    fullTeeth: true,
                    onlyCenter: false,
                    onlyFace: false, isEraser: false, isRx :false,
                    onlyTopBorder: false, onlyBottomBorder:false
                },
                src: "./resources/symbols/marcas/Imagen11.png",
                srcIcon: "./resources/symbols/marcas/Imagen11_icon.png",
                tittle: "Poroso 4"
            },
              {
                  id: 8,
                  name: "poroso",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen12.png",
                  srcIcon: "./resources/symbols/marcas/Imagen12_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen13.png",
                  srcIcon: "./resources/symbols/marcas/Imagen13_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen14.png",
                  srcIcon: "./resources/symbols/marcas/Imagen14_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen15.png",
                  srcIcon: "./resources/symbols/marcas/Imagen15_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen16.png",
                  srcIcon: "./resources/symbols/marcas/Imagen16_icon.png",
                  tittle: "Poroso 4"
              },
              {
                id: 6,
                name: "poroso",
                validations: {
                    fullTeeth: false,
                    onlyCenter: false,
                    onlyFace: false, 
                    isEraser: false, isRx :false,
                    onlyTopBorder: true, 
                    onlyBottomBorder:false, 
                    color:"blue"
                },
                src: "./resources/symbols/marcas/Imagen17.png",
                srcIcon: "./resources/symbols/marcas/Imagen17_icon.png",
                tittle: "Poroso 4"
            }, 
            {
                id: 6,
                name: "poroso",
                validations: {
                    fullTeeth: false,
                    onlyCenter: false,
                    onlyFace: false, isEraser: false, isRx :false,
                    onlyTopBorder: true, onlyBottomBorder:false, color:"red"
                },
                src: "./resources/symbols/marcas/Imagen18.png",
                srcIcon: "./resources/symbols/marcas/Imagen18_icon.png",
                tittle: "Poroso 4"
            },  {
                id: 6,
                name: "poroso",
                validations: {
                    fullTeeth: true,
                    onlyCenter: false,
                    onlyFace: false, isEraser: false, isRx :false,
                    onlyTopBorder: false, onlyBottomBorder:false
                },
                src: "./resources/symbols/marcas/Imagen19.png",
                srcIcon: "./resources/symbols/marcas/Imagen19_icon.png",
                tittle: "Poroso 4"
            },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen20.png",
                  srcIcon: "./resources/symbols/marcas/Imagen20_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: false,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:true, color:"blue"
                  },
                  src: "./resources/symbols/marcas/Imagen21.png",
                  srcIcon: "./resources/symbols/marcas/Imagen21_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: false,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, 
                      onlyBottomBorder:true,
                      color:"red"
                  },
                  src: "./resources/symbols/marcas/Imagen22.png",
                  srcIcon: "./resources/symbols/marcas/Imagen22_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: false,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen23.png",
                  srcIcon: "./resources/symbols/marcas/Imagen23_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: false,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen24.png",
                  srcIcon: "./resources/symbols/marcas/Imagen24_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen25.png",
                  srcIcon: "./resources/symbols/marcas/Imagen25_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen26.png",
                  srcIcon: "./resources/symbols/marcas/Imagen26_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen27.png",
                  srcIcon: "./resources/symbols/marcas/Imagen27_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen28.png",
                  srcIcon: "./resources/symbols/marcas/Imagen28_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen29.png",
                  srcIcon: "./resources/symbols/marcas/Imagen29_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen30.png",
                  srcIcon: "./resources/symbols/marcas/Imagen30_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen31.png",
                  srcIcon: "./resources/symbols/marcas/Imagen31_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen32.png",
                  srcIcon: "./resources/symbols/marcas/Imagen32_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/ImagenBorrador.png",
                  srcIcon: "./resources/symbols/marcas/Imagen33_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen34.png",
                  srcIcon: "./resources/symbols/marcas/Imagen34_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: false,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :true,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen35.png",
                  srcIcon: "./resources/symbols/marcas/Imagen35_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen36.png",
                  srcIcon: "./resources/symbols/marcas/Imagen36_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 6,
                  name: "poroso",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen38.png",
                  srcIcon: "./resources/symbols/marcas/Imagen38_icon.png",
                  tittle: "Poroso 4"
              },
              {
                  id: 39,
                  name: "poroso",
                  validations: {
                      fullTeeth: true,
                      onlyCenter: false,
                      onlyFace: false, isEraser: false, isRx :false,
                      onlyTopBorder: false, onlyBottomBorder:false
                  },
                  src: "./resources/symbols/marcas/Imagen39.png",
                  srcIcon: "./resources/symbols/marcas/Imagen39_icon.png",
                  tittle: "Poroso 4"
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
      getItemTool(x, y, symbol, position) {
          var widthIcon = 35;
          var heightIcon = 35;
          var imageObj = new Image();
          var layer = this.layer;
          var stage = this.stage;
          var toolsInstance = this;
          imageObj.onload = function () {
              var tool = new Konva.Image({
                  x: x,
                  y: y,
                  image: imageObj,
                  width: widthIcon,
                  fill: "blue",
                  stroke: "blue",
                  fillPatternRepeat:"no-repeat",
                  height: heightIcon,
                  draggable: false,
                  name: "tools" + position,

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
                  this.scaleY(1.5);
                  this.scaleX(1.5);
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
              y: yinitial - 20,

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
          xinitial = xinitial;
          var xinitialCalculated = xinitial;
          var yinitialCalculated = yinitial;

          for (var location = 0; location < symbolsCount; location++) {


              if (columnaActual < columns) {

                  if (columnaActual == 1) {
                      xinitialCalculated = xinitial;
                      console.log("entro");

                  }

                  images[location] = this.getItemTool(xinitialCalculated, yinitialCalculated, symbols[location], location);
                  xinitialCalculated = xinitialCalculated + longColumn * .7;
                  columnaActual = columnaActual + 1;
              } else {

                  images[location] = this.getItemTool(xinitialCalculated, yinitialCalculated, symbols[location], location);

                  yinitialCalculated = yinitialCalculated + longColumn - 20;
                  columnaActual = 1;

              }
          }
      }



      getTittle() {
          return this.tittle;
      }

      setTittle(message) {
          this.tittle.text(message);
          this.layer.draw();
      }


  }