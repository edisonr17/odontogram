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



  drawTeeth(x, y, teeth, quadrantName) {
    var background = this.getInstanceImageBackground(this.getCurrentBackground());
    var symbol = this.getCurrentSymbol();
    var group = this.getGroup(teeth, quadrantName);
    var teethInstance = this;

    // add the shape to the layer
    var faces = [
      this.drawFace(0 - 45, 90, x, y, "right", teeth, quadrantName),
      this.drawFace(90 - 45, 90, x, y, "bottom", teeth, quadrantName),
      this.drawFace(180 - 45, 90, x, y, "left", teeth, quadrantName),
      this.drawFace(270 - 45, 90, x, y, "top", teeth, quadrantName)
    ];
    group.add(this.drawNumber(x, y, teeth.id));
    group.add(this.drawRx(x, y, teeth.id, teeth));
    group.add(this.drawBorder(x, y, 18, 22, "container", teeth));
    group.add(this.drawBorderContainer(x, y, 18, 22, "borderBottom", 0, teeth, quadrantName));
    group.add(this.drawBorderContainer(x, y, 18, 22, "borderTop", 180, teeth, quadrantName));
    group.add(this.fullTeethContainer(x, y, 22, teeth, quadrantName));
    group.add(this.drawCenter(x, y, 8, teeth, quadrantName));

    for (var k = 0; k < 4; k++) {
      group.add(faces[k]);
    }

    this.layer.add(group);
    this.layer.draw();
  }

  /**
   * Esta función se usa para agrupar cada seccion del diente como un todo0
   */
  getGroup(teeth, quadrantName) {
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
      document.getElementById("contenedor").style.cursor = 'pointer';
      var symbol = teethInstance.getCurrentSymbol();
      if (symbol != undefined) {
        var validation = teethInstance.validationSymbol(teeth, symbol);
        if(validation.canClick == true)
        { 
          var capa = this.find(validation.id);
          capa.moveToTop();
        }
        else
        {
          var capa = this.find(validation.id);
          capa.moveToBottom();
        }
      }
      teethInstance.stage.draw();
    });

    group.on('click', function (evt) {
      var symbol = teethInstance.getCurrentSymbol();
      if (symbol != undefined) {

        //Diente completa
        //marca rayos x
        if (symbol.validations.isRx == true) {
          if (teeth.sections.rx.symbols == null) {
            var rx = this.find("#rx" + teeth.id);
            rx.visible(true);
            teeth.sections.rx.symbols = symbol.id;
            teethInstance.updateTeethObject(quadrantName, teeth);
          } else {
            console.log("Ya este diente tiene rayos x");
          }
        }

        if(symbol.validations.isEraser == true)
        {
          console.log(teeth.sections.fullTeeth.symbols);
          var container = this.find("#fullteeth" + teeth.id);
          container.fill('rgba(0,0,0,0)');
          
          var face = this.find("#top" + teeth.id);
          face.fill('rgba(0,0,0,0)');
          face.stroke('black');

          face = this.find("#left" + teeth.id);
          face.fill('rgba(0,0,0,0)');
          face.stroke('black');

          face = this.find("#right" + teeth.id);
          face.fill('rgba(0,0,0,0)');
          face.stroke('black');

          face = this.find("#bottom" + teeth.id);
          face.fill('rgba(0,0,0,0)');
          face.stroke('black');

          var center = this.find("#center" + teeth.id);
          center.fill('rgba(0,0,0,0)');

          var rx = this.find("#rx" + teeth.id);
          rx.visible(false);

          var border = this.find("#borderBottom" + teeth.id);
          border.fill('#A4A4A4');

          border = this.find("#borderTop" + teeth.id);
          border.fill('#A4A4A4');



          teeth.sections = teethInstance.cleanTeeth();
          teethInstance.updateTeethObject(quadrantName, teeth);
        }
      }
      teethInstance.stage.draw();
    });


    group.on('mouseleave', function (evt) {
      document.getElementById("contenedor").style.cursor = 'default';
      var symbol = teethInstance.getCurrentSymbol();
      if (symbol != undefined) {

      }
      teethInstance.stage.draw();
    });
    return group;
  }


  cleanTeeth()
  {
      return {
        rx: {
          symbols: null
        },
        top: {
          symbols: null
        },
        left: {
          symbols: null
        },
        bottom: {
          symbols: null
        },
        right: {
          symbols: null
        },
        center: {
          symbols: null
        },
        borderTop: {
          symbols: null
        },
        borderBottom: {
          symbols: null
        },
        fullTeeth: {
          status: false,
          symbols: null
        }
      };
  }
  /**
   * 
   * @param {*} x 
   * @param {*} y 
   * @param {*} radius 
   * @param {*} teethId 
   */
  fullTeethContainer(x, y, radius, teeth, quadrant) {
    var teethInstance = this;
    var stage = this.stage;
    var quadrantName = quadrant;
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
      var validation = teethInstance.validationSymbol(teeth, symbol);
      if(validation.canClick == true)
      {
             background.src = teethInstance.getCurrentBackground();
        ///    this.moveToTop();
            this.fill("");
            this.fillPatternImage(background);
            this.fillPatternOffset({
              x: 20,
              y: 20
            });
            this.opacity(0.9);
      }
    });

    circle.on('mouseleave', function () {
      var symbol = teethInstance.getCurrentSymbol();
      var validation = teethInstance.validationSymbol(teeth, symbol);
      if(validation.canClick == true)
      {
        this.fill('rgba(0,0,0,0)');
        this.fillPatternImage();
      }
    });


    circle.on('click', function () {
      var symbol = teethInstance.getCurrentSymbol();
      if (symbol != undefined) {
        var validation = teethInstance.validationSymbol(teeth, symbol);
        if(validation.canClick == true)
        {
               background.src = teethInstance.getCurrentBackground();
          ///    this.moveToTop();
              this.fill("");
              this.fillPatternImage(background);
              this.fillPatternOffset({
                x: 20,
                y: 20
              });
              this.opacity(0.9);
              teeth.sections.fullTeeth.symbols = symbol.id;
              teethInstance.updateTeethObject(quadrantName, teeth);
        }
      }
      teethInstance.stage.draw();
    });

    return circle;

  }




  drawFace(rotation, angle, x, y, teethId, teeth, quadrantName) {
    var teethInstance = this;
    let face = new Konva.Arc({
      x: x,
      y: y,
      id: teethId + teeth.id,
      innerRadius: 8,
      outerRadius: 18,
      angle: angle,
      fill: "white",
      stroke: 'black',
      rotation: rotation,
      strokeWidth: 1.5,
      //   fillPatternImage: background
    });


    var background = this.getInstanceImageBackground();
    var click = false;
    face.on('mouseover', function () {
      var symbol = teethInstance.getCurrentSymbol();
      var validation = teethInstance.validationsSymbolOnFace(teeth, symbol, teethId);
      if(validation.canClick == true)
      {
             background.src = teethInstance.getCurrentBackground();
        ///    this.moveToTop();
            this.fill("");
            this.stroke("green");
            this.fillPatternImage(background);
      }
    });

    face.on('click', function () {
      var symbol = teethInstance.getCurrentSymbol();
      var validation = teethInstance.validationsSymbolOnFace(teeth, symbol, teethId);
      if(validation.canClick == true)
      {

             background.src = teethInstance.getCurrentBackground();
        ///    this.moveToTop();
            this.fill("");
            
            this.fillPatternImage(background);
            teeth.sections[teethId].symbols = symbol.id;
            teethInstance.updateTeethObject(quadrantName, teeth);
      }
    });

    face.on('mouseleave', function () {

      var symbol = teethInstance.getCurrentSymbol();
      var validation = teethInstance.validationsSymbolOnFace(teeth, symbol, teethId);
      
      if(validation.canClick == true)
      {
        this.stroke("black");

        this.fill('rgba(0,0,0,0)');
        this.fillPatternImage();
       
      }    });

    return face;
  }





  drawCenter(x, y, radius, teeth, quadrantName) {
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
      var validation = teethInstance.validationsSymbolOnCenter(teeth, symbol);
      if(validation.canClick == true)
      {
             background.src = teethInstance.getCurrentBackground();
        ///    this.moveToTop();
            this.fill("");
            this.fillPatternOffset({
              x: 22,
              y: 27
            });
            this.stroke("green");
            this.fillPatternImage(background);
      }
    });

    center.on('click', function () {
      var symbol = teethInstance.getCurrentSymbol();
      var validation = teethInstance.validationsSymbolOnCenter(teeth, symbol);
      if(validation.canClick == true)
      {

             background.src = teethInstance.getCurrentBackground();
        ///    this.moveToTop();
            this.fill("");
            this.fillPatternOffset({
              x: 22,
              y: 27
            });
            this.fillPatternImage(background);
            teeth.sections.center.symbols = symbol.id;
            teethInstance.updateTeethObject(quadrantName, teeth);
      }
    });

    center.on('mouseleave', function () {
      var symbol = teethInstance.getCurrentSymbol();
      var validation = teethInstance.validationsSymbolOnCenter(teeth, symbol);
      
      if(validation.canClick == true)
      {
        this.stroke("black");
        this.fill('rgba(0,0,0,0)');
        this.fillPatternImage();
      }
    });

    return center;
  }











  drawBorderContainer(x, y, minRadius, maxRadius, teethId, rotation, teeth, quadrantName) {

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
      var background;
      var symbol = teethInstance.getCurrentSymbol();
      var validation = teethInstance.validationsSymbolOnTopOrBottom(teeth, symbol, teethId);
      if(validation.canClick == true)
      {
        ///    this.moveToTop();
            this.fill(symbol.validations.color);
            this.fillPatternOffset({
              x: 22,
              y: 27
            });
      }
    });

    center.on('mouseleave', function () {
      var background;
      var symbol = teethInstance.getCurrentSymbol();
      var validation = teethInstance.validationsSymbolOnTopOrBottom(teeth, symbol, teethId);
      if(validation.canClick == true)
      {
        ///    this.moveToTop();
            this.fill("#A4A4A4");
            this.fillPatternOffset({
              x: 22,
              y: 27
            });
      }
    });




    center.on('click', function () {
      var background;
      var symbol = teethInstance.getCurrentSymbol();
      var validation = teethInstance.validationsSymbolOnTopOrBottom(teeth, symbol, teethId);
      if(validation.canClick == true)
      {
        ///    this.moveToTop();
            this.fill(symbol.validations.color);
            this.fillPatternOffset({
              x: 22,
              y: 27
            });
            if(teethId =="borderTop" )
            {
              teeth.sections.borderTop.symbols = symbol.id;
            }else
            {
              teeth.sections.borderBottom.symbols = symbol.id;
            }
            teethInstance.updateTeethObject(quadrantName, teeth);
      }
    });
    return center;
  }




  /**
   * Sibuja el borde del diente
   */

  drawBorder(x, y, minRadius, maxRadius, name, teeth) {
    var teethInstance = this;
    var click = false;
    var center = new Konva.Arc({
      x: x,
      y: y,
      id: name + teeth.id,
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