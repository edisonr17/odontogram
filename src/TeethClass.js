class TeethClass extends BaseOdontogram {

  currentBackground = "./resources/symbols/implante.png";

  /**
   * Metodo que dibuja un diente completo
   */
  drawNumber(x, y, teethNumber) {
    if ((teethNumber >= 11 && teethNumber <= 18) || (teethNumber >= 51 && teethNumber <= 55) || (teethNumber >= 41 && teethNumber <= 48) || (teethNumber >= 81 && teethNumber <= 85)) {
      x = x - 23;
    } else {
      x = x + 20;
    }
    var simpleText = new Konva.Text({
      x: x,
      y: y + 19,
      text: teethNumber,
      fontSize: 9,
      fill: 'black',
      fontFamily: 'Calibri',
    });
    return simpleText;
  }


  drawRx(x, y, teethNumber, teeth) {
    if ((teethNumber >= 11 && teethNumber <= 18) || (teethNumber >= 51 && teethNumber <= 55) || (teethNumber >= 41 && teethNumber <= 48) || (teethNumber >= 81 && teethNumber <= 85)) {
      x = x - 23;
    } else {
      x = x + 20;
    }

    var rx = new Konva.Text({
      x: x,
      y: y + 24,
      text: 'rx',
      fontSize: 10,
      fill: 'red',
      visible: false,
      id: 'rx' + teeth.id,
      fontFamily: 'Calibri',
    });
    return rx;
  }



  drawTeeth(x, y, teeth) {
    var background = this.getInstanceImageBackground(this.getCurrentBackground());
    var symbol = this.getCurrentSymbol();
    var group = this.getGroup(teeth);
    var teethInstance = this;

    // add the shape to the layer
    var faces = [
      this.drawFace(0 - 45, 90, this.stage, this.layer, x, y, "white", "top", teeth),
      this.drawFace(90 - 45, 90, this.stage, this.layer, x, y, "white", "right", teeth),
      this.drawFace(180 - 45, 90, this.stage, this.layer, x, y, "white", "bottom", teeth),
      this.drawFace(270 - 45, 90, this.stage, this.layer, x, y, "white", "left", teeth)
    ];

    if (teeth.id != undefined) {
      group.add(this.drawNumber(x, y, teeth.id));
      group.add(this.drawRx(x, y, teeth.id, teeth));
    }

    group.add(this.drawBorder(x, y, 18, 22, "container" + teeth.id));
    group.add(this.drawBorderContainer(x, y, 18, 22, "borderTop", 0, teeth));
    group.add(this.drawBorderContainer(x, y, 18, 22, "borderBottom", 180, teeth));
    group.add(this.fullTeethContainer(x, y, 22, teeth));
    group.add(this.drawCenter(x, y, 8, teeth));

    for (var k = 0; k < 4; k++) {
      group.add(faces[k]);
    }

    this.layer.add(group);
    this.layer.draw();
  }

  /**
   * Esta función se usa para agrupar cada seccion del diente como un todo0
   */
  getGroup(teeth) {
    var click = false;
    var background = this.getInstanceImageBackground(this.getCurrentBackground());
    var teethInstance = this;
    var teethObject = teeth;
    var group = new Konva.Group({
      draggable: false,
      drawBorder: false,
      width: 40,
      height: 40,
      id: teeth.id
    });
    group.on('mouseover', function () {
      document.body.style.cursor = 'pointer';

      
      var symbol = teethInstance.getCurrentSymbol();
      if (symbol != undefined) {

            if (symbol.validations.fullTeeth == true ) {
              var fullcontainer = this.find("#fullteeth" + teeth.id);
              fullcontainer.moveToTop();
            } else {
              if (teeth.sections.fullTeeth.symbols == null) {
                var fullcontainer = this.find("#fullteeth" + teeth.id);
                fullcontainer.moveToBottom();
              }
            }

            if (symbol.validations.onlyCenter == true) {
              var center = this.find('#center' + teeth.id)
              center.moveToTop();
            }



            if (symbol.validations.onlyFace == true) {
              var face = this.find('#top' + teeth.id);
              face.moveToTop();
              face = this.find('#left' + teeth.id);
              face.moveToTop();
              face = this.find('#right' + teeth.id);
              face.moveToTop();
              face = this.find('#bottom' + teeth.id);
              face.moveToTop();
            }


            if (symbol.validations.onlyTopBorder == true) {
              var face = this.find('#top' + teeth.id);
              face.moveToTop();
            }


            if (symbol.validations.onlyBottomBorder == true) {
              var face = this.find('#borderBottom' + teeth.id);
              face.moveToTop();
            }

            if (symbol.validations.onlyTopBorder == true) {
              var face = this.find('#borderTop' + teeth.id);
              face.moveToTop();
            }




      }

      teethInstance.stage.draw();
    });

    group.on('click', function (evt) {
      document.body.style.cursor = 'default';
      var symbol = teethInstance.getCurrentSymbol();
      if (symbol != undefined) {

        if (symbol.validations.isRx == true) {
          var rx = this.find("#rx" + teeth.id);
          rx.visible(true);
        }

        if (symbol.validations.isEreser == true) {
          var fullcontainer = this.find("#fullteeth" + teeth.id);
          fullcontainer.moveToTop();
          this.fill('rgba(0,0,0,0)');
          var rx = this.find("#rx" + teeth.id);
          rx.visible(true);
          var face = this.find('#borderTop' + teeth.id);
          face.moveToTop();
          var face = this.find('#borderBottom' + teeth.id);
          face.moveToTop();
        }
      }
      teethInstance.stage.draw();
    });


    group.on('mouseleave', function (evt) {
      document.body.style.cursor = 'default';
      var symbol = teethInstance.getCurrentSymbol();
      if (symbol != undefined) {

        if (symbol.validations.fullTeeth == true) {
          var fullcontainer = this.find("")
        }
      }
      teethInstance.stage.draw();
    });
    return group;
  }

  /**
   * 
   * @param {*} x 
   * @param {*} y 
   * @param {*} radius 
   * @param {*} teethId 
   */
  fullTeethContainer(x, y, radius, teeth) {
    var teethInstance = this;
    var stage = this.stage;
    var background = this.getInstanceImageBackground();
    var symbol = this.getCurrentSymbol();
    var click = false;
    var circle = new Konva.Circle({
      x: x,
      y: y,
      id: "fullteeth" + teeth.id,
      radius: radius - 4,
      fill: 'rgba(0,0,0,0)',
      stroke: 'rgba(0,0,0,0)',
      strokeWidth: 1
    });
    circle.on('mouseover', function () {

      var symbol = teethInstance.getCurrentSymbol();
      if (symbol != null) {
        if (click == false) {
          if (symbol.validations.fullTeeth == true) {
            background.src = teethInstance.getCurrentBackground();
            this.moveToTop();
            this.fill("");
            this.fillPatternImage(background);
          }

          this.fillPatternOffset({
            x: 20,
            y: 20
          });
          this.opacity(0.9);
          document.getElementById("contenedor").style.cursor = 'pointer';
          stage.draw();
        }
      }

    });

    circle.on('mouseleave', function () {
      if (click == false) {
        var symbol = teethInstance.getCurrentSymbol();
        if (symbol != null) {
          if (symbol.validations.fullTeeth == false) {
            this.moveToBottom();
          }
          this.fill('rgba(0,0,0,0)');
          this.fillPatternImage();
          document.getElementById("contenedor").style.cursor = 'default';
          stage.draw();
        }
      }

    });


    circle.on('click', function () {
      console.log(teeth);
      var symbol = teethInstance.getCurrentSymbol();
      if (symbol != null) {
        if (symbol.validations.fullTeeth == true) {
          click = true;

          background.src = teethInstance.getCurrentBackground();
          this.moveToTop();
          this.fill("");
          this.fillPatternImage(background);
          // this.opacity(8);     
        }

        this.fillPatternOffset({
          x: 20,
          y: 20
        });
        this.opacity(0.9);
        document.getElementById("contenedor").style.cursor = 'pointer';
        stage.draw();
      }

    });

    return circle;

  }









  drawCenter(x, y, radius, teeth) {
    var click = false;
    var teethInstance = this;
    var center = new Konva.Circle({
      x: x,
      y: y,
      radius: radius,
      fill: 'white',
      stroke: 'black',
      strokeWidth: 1,
      id: 'center' + teeth.id
    });

    var background = this.getInstanceImageBackground(this.getCurrentBackground());
    var symbol = this.getCurrentSymbol();

    center.on('mouseover', function () {
      var symbol = teethInstance.getCurrentSymbol();

      document.getElementById("contenedor").style.cursor = 'pointer';
      if (symbol != undefined) {
        if (click == false) {
          if (symbol.validations.fullTeeth != true) {
            var resultValidations = teethInstance.validationClickOnTeeth(center, symbol, "center");
            if (resultValidations.status == true) {
              this.fillPatternOffset({
                x: 22,
                y: 25
              });

              background.src = teethInstance.getCurrentBackground();
              this.stroke("blue");
              this.strokeWidth(2);
              this.fillPatternImage(background);
              teethInstance.stage.draw();
            }
          }
        }
      }
    });

    center.on('mouseleave', function () {
      if (click == false) {
        this.fillPatternImage();
        this.fill("white");
        this.strokeWidth(1);
        this.stroke("black");
        this.draw();
      }
      document.getElementById("contenedor").style.cursor = 'default';
    });

    center.on('click', function () {
      var symbol = teethInstance.getCurrentSymbol();
      if (symbol != undefined) {
        background.src = teethInstance.getCurrentBackground();
        var resultValidations = teethInstance.validationClickOnTeeth(center, symbol, "center");
        document.getElementById("contenedor").style.cursor = 'pointer';
        if (resultValidations.status == true) {
          this.fill("");
          this.fillPatternImage(background);
          // console.log(background);
          this.strokeWidth(1);
          if (symbol.validations.fullTeeth == false) {
            this.moveToTop();
          } else {
            this.moveToBottom();
          }
          this.stroke("black");
          background.src = teethInstance.getCurrentBackground();
          click = true;
          teethInstance.stage.draw();
          //    console.log(resultValidations.message);
        } else {
          //   console.log(resultValidations.message);
        }
      }


    });


    return center;
  }








  drawFace(rotation, angle, stage, layer, x, y, color, teethId, teeth) {
    var teethInstance = this;
    let face = new Konva.Arc({
      x: x,
      y: y,
      id: teethId + teeth.id,
      innerRadius: 8,
      outerRadius: 18,
      angle: angle,
      fill: color,
      stroke: 'black',
      rotation: rotation,
      strokeWidth: 1.5,
      //   fillPatternImage: background
    });


    var background = this.getInstanceImageBackground();



    var click = false;

    face.on('mouseover', function () {
      var symbol = teethInstance.getCurrentSymbol();
      if (symbol != undefined) {
        if (click == false) {

          if (symbol.validations.fullTeeth == false) {
            this.moveToTop();
            background.src = teethInstance.getCurrentBackground();
            this.fill("");
            this.fillPatternImage(background);
            // console.log(background);
            this.stroke("green");
            this.strokeWidth(2);
          } else {
            this.moveToBottom();
          }
          stage.draw();
        }
      }

      document.getElementById("contenedor").style.cursor = 'pointer';
    });

    face.on('click', function () {
      var symbol = teethInstance.getCurrentSymbol();
      var resultValidations = teethInstance.validationClickOnTeeth(face, symbol, "face");
      document.getElementById("contenedor").style.cursor = 'pointer';
      if (resultValidations.status == true) {
        this.fill("");
        this.fillPatternImage(background);
        // console.log(background);
        this.strokeWidth(1);

        this.stroke("black");
        background.src = teethInstance.getCurrentBackground();
        click = true;
        //   console.log(resultValidations.message);
      } else {
        //   console.log(resultValidations.message);
      }
    });

    face.on('mouseleave', function () {
      if (click == false) {
        this.fillPatternImage();
        this.fill("white");
        this.strokeWidth(1);

        this.stroke("black");
        teethInstance.stage.draw();

      }
      document.getElementById("contenedor").style.cursor = 'default';
    });

    return face;
  }



  drawBorderContainer(x, y, minRadius, maxRadius, teethId, rotation, teeth) {

    var teethInstance = this;
    var click = false;
    var center = new Konva.Arc({
      x: x,
      y: y,
      id: teethId + teeth.id,
      innerRadius: minRadius + 2,
      outerRadius: maxRadius + 2,
      angle: 90,
      fill: "#A4A4A4",
      stroke: '',
      rotation: rotation + 45,
      strokeWidth: 2,
    });


    center.on('mouseover', function () {
      var symbol = teethInstance.getCurrentSymbol();
      if (symbol != undefined) {
        if (symbol.validations.fullTeeth == false) {
          if ((symbol.validations.onlyTopBorder == true && rotation > 0) && click == false) {
            this.moveToTop();
            this.fill(symbol.validations.color);
          }
          if ((symbol.validations.onlyBottomBorder == true && rotation == 0 && click == false)) {
            this.moveToTop();
            this.fill(symbol.validations.color);
          }
        } else {
          this.moveToBottom();
        }

        teethInstance.stage.draw();
      }

      document.getElementById("contenedor").style.cursor = 'pointer';
    });

    center.on('mouseleave', function () {
      // this.stroke("black");
      // this.fill("black");
      if (click == false) {
        this.fill("#A4A4A4");
      }
      document.getElementById("contenedor").style.cursor = 'default';
      teethInstance.stage.draw();

    });




    center.on('click', function () {
      /*this.stroke("yellow");
      this.fill("yellow");
      */
      if (click == false) {
        var symbol = teethInstance.getCurrentSymbol();
        if (symbol.validations.fullTeeth == false) {
          if ((symbol.validations.onlyTopBorder == true && rotation > 0)) {
            click = true;
            this.moveToTop();
            this.fill(symbol.validations.color);
          }

          if ((symbol.validations.onlyBottomBorder == true && rotation == 0)) {
            click = true;
            this.moveToTop();
            this.fill(symbol.validations.color);
          }
        } else {

        }
        teethInstance.stage.draw();
        document.getElementById("contenedor").style.cursor = 'pointer';
      } else {}
    });
    return center;
  }




  /**
   * Sibuja el borde del diente
   */

  drawBorder(x, y, minRadius, maxRadius, teethId) {
    var teethInstance = this;
    var click = false;
    var center = new Konva.Arc({
      x: x,
      y: y,
      id: teethId,
      innerRadius: minRadius,
      outerRadius: maxRadius,
      angle: 360,
      fill: "#A4A4A4",
      stroke: '',
      strokeWidth: 1,

    });
    return center;
  }







};