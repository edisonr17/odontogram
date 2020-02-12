class TeethClass extends BaseOdontogram {

  currentBackground = "./resources/symbols/implante.png";

  /**
   * Metodo que dibuja un diente completo
   */
  drawNumber(x, y, teethNumber) {
    if((teethNumber >= 11 && teethNumber <=18) || (teethNumber >=51 && teethNumber <=55) || (teethNumber >=42 && teethNumber <=48)|| (teethNumber >=81 && teethNumber <=85))
    {
      x = x - 23;

    }
    else
    {
      x =  x + 20 ;

    }
    var simpleText = new Konva.Text({
      x: x ,
      y: y + 18,
      text: teethNumber,
      fontSize: 10,
      fill: 'blue',

      fontFamily: 'Calibri',
      fill: 'black'
    });
    return simpleText;
  }


  drawTeeth(x, y, teethId) {
    var background = this.getInstanceImageBackground(this.getCurrentBackground());
    var symbol = this.getCurrentSymbol();
    var group = this.getGroup(teethId);
    var teethInstance = this;

    // add the shape to the layer
    var faces = [
      this.drawFace(0 - 45, 90, this.stage, this.layer, x, y, "white", "top" + teethId),
      this.drawFace(90 - 45, 90, this.stage, this.layer, x, y, "white", "right" + teethId),
      this.drawFace(180 - 45, 90, this.stage, this.layer, x, y, "white", "bottom" + teethId),
      this.drawFace(270 - 45, 90, this.stage, this.layer, x, y, "white", "left" + teethId)
    ];

    group.add(this.drawNumber(x, y, teethId));

    group.add(this.drawBorder(x,y, 18,22, "container"+teethId));
    group.add(this.drawBorderContainer(x, y, 18, 22, "borderTop" + teethId, 0));
    group.add(this.drawBorderContainer(x, y, 18, 22, "borderBottom" + teethId, 180));

    group.add(this.fullTeethContainer(x, y, 22, "fullTeeth" + teethId));
    group.add(this.drawCenter(x, y, 8, "center" + teethId));

    for (var k = 0; k < 4; k++) {
      group.add(faces[k]);

    }

    this.layer.add(group);
    this.layer.draw();

  }

  /**
   * Esta función se usa para agrupar cada seccion del diente como un todo0
   */
  getGroup(id) {

    var click = false;
    var background = this.getInstanceImageBackground(this.getCurrentBackground());
    var teethInstance = this;
    var stage = this.stage;
    var group = new Konva.Group({
      draggable: false,
      drawBorder: false,
      width: 40,
      height: 40,
      id: id
    });


    group.on('mouseleave', function (evt) {
      document.body.style.cursor = 'default';

      stage.draw();
    });

    group.on('mouseover', function () {
      document.body.style.cursor = 'pointer';
      stage.draw();
    });

    group.on('click', function () {

      var symbol = teethInstance.getCurrentSymbol();
      if (!click) {
        if (symbol != null) {
          if (symbol.validations.fullTeeth == true) {


            console.log("Se peude aplicar");
            click = true;
            //   this.opacity(0.5);
          } else {
            console.log("No se pede aplicar al diente completo");
          }
        } else {
          console.log(" NO se ha seleciconado simbolo");
        }
      } else {
        click = false;
        // this.opacity(1);
      }
      stage.draw();
      // set opacity
      document.body.style.cursor = 'pointer';
      //   group.draw();
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
  fullTeethContainer(x, y, radius, teethId) {
    var teethInstance = this;
    var stage = this.stage;
    var background = this.getInstanceImageBackground();
    var symbol = this.getCurrentSymbol();
    var click = false;
    var circle = new Konva.Circle({
      x: x,
      y: y,
      id: teethId,
      radius: radius - 3,
      fill: 'rgba(0,0,0,0)',
      stroke: 'rgba(0,0,0,0)',
      strokeWidth: 1
    });
    circle.on('mouseover', function () {
      /*this.stroke("yellow");
       this.fill("yellow");
       
     */
      var symbol = teethInstance.getCurrentSymbol();
      if (symbol != null) {
        if (click == false) {
          if (symbol.validations.fullTeeth == true) {
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
      click = true;
      var symbol = teethInstance.getCurrentSymbol();
      if (symbol != null) {
        if (symbol.validations.fullTeeth == true) {
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









  drawCenter(x, y, radius, teethId) {
    var click = false;
    var teethInstance = this;
    var center = new Konva.Circle({
      x: x,
      y: y,
      radius: radius,
      fill: 'white',
      stroke: 'black',
      strokeWidth: 1,
      id: teethId
    });



    var background = this.getInstanceImageBackground(this.getCurrentBackground());
    var symbol = this.getCurrentSymbol();



    center.on('mouseover', function () {
      document.getElementById("contenedor").style.cursor = 'pointer';
      if (click == false) {
        var symbol = teethInstance.getCurrentSymbol();
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
            // console.log(background);

            teethInstance.stage.draw();
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
      background.src = teethInstance.getCurrentBackground();
      var symbol = teethInstance.getCurrentSymbol();
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

    });


    return center;
  }








  drawFace(rotation, angle, stage, layer, x, y, color, teethId) {
    var teethInstance = this;
    let face = new Konva.Arc({
      x: x,
      y: y,
      id: teethId,
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
      if (click == false) {
        var symbol = teethInstance.getCurrentSymbol();
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












  drawBorderContainer(x, y, minRadius, maxRadius, teethId, rotation) {

    var teethInstance = this;
    var click = false;
    var center = new Konva.Arc({
      x: x,
      y: y,
      id: teethId,
      innerRadius: minRadius + 2,
      outerRadius: maxRadius +2 ,
      angle: 90,
      fill: "#A4A4A4",
      stroke: '',
      rotation: rotation + 45,
      strokeWidth: 2,

    });
    center.on('mouseover', function () {
      /*this.stroke("yellow");
       this.fill("yellow");
     */
      var symbol = teethInstance.getCurrentSymbol();
      console.log(symbol);
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
      } else {

      }

    });




    return center;

  }




  drawBorder(x, y, minRadius, maxRadius, teethId) {

    var teethInstance = this;
    var click = false;
    var center = new Konva.Arc({
      x: x,
      y: y,
      id: teethId,
      innerRadius: minRadius ,
      outerRadius: maxRadius  ,
      angle: 360,
      fill: "#A4A4A4",
      stroke: '',
      strokeWidth: 1,

    });





    return center;

  }







};