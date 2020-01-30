class teeth {
  stage = new Konva.Stage({
    container: 'container',
    width: 1200,
    height: 700
  });


  layer = new Konva.Layer();
  currentBackground = "./resources/symbols/implante.png";

  constructor() {

  }

  getStage() {
    return this.stage;
  }

  /**
   * Este metodo selecciona un fondo para el diente al clickear un simbolo
   */
  setCurrentBackground(src) {
    this.currentBackground = src;
    console.log(this.currentBackground);
  }

  symbol = null;
  setCurrentSymbol(symbol) {
    this.symbol = symbol;
  }

  getCurrentSymbol() {
    return this.symbol;
  }

  getCurrentBackground() {
    return this.currentBackground;
  }

  backgroundImagen = new Image();
  getInstanceImageBackground(src) {
    this.backgroundImagen.src = src;
    return this.backgroundImagen;
  }











  /**
   * Metodo que dibuja un diente completo
   */
  drawTeeth(x, y) {
    var group = new Konva.Group({
      draggable: true,
    });

    group.on('click', function() {
      document.body.style.cursor = 'default';
      console.log("paso por el diente");
    });
    // add the shape to the layer
    var faces = [
      this.drawFace(0 - 45, 90, this.stage, this.layer, x, y, "white"),
      this.drawFace(90 - 45, 90, this.stage, this.layer, x, y, "white"),
      this.drawFace(180 - 45, 90, this.stage, this.layer, x, y, "white"),
      this.drawFace(270 - 45, 90, this.stage, this.layer, x, y, "white")
    ]
    group.add(this.drawContainer(x, y, 18,22));
    group.add(this.drawCenter(x, y, 8));

    for (var k = 0; k < 4; k++) {
      group.add(faces[k]);
     
    }
    this.layer.add(group);
    this.layer.draw();
    this.stage.add(this.layer);
  }




  /**
   * @object es la instancia del objecto que se va a pintar
   * @type si es onmouseover, onclick, onmouseleave
   *   validations:{fullTeeth:false, onlyCenter:false,   onlyFace:false},
   */
  commonSymbolValidationFalse(symbol) {
    if ((symbol.validations.fullTeeth == false && symbol.validations.onlyCenter == false && symbol.validations.onlyFace == false)) {
      return true;
    } else {
      return false;
    }
  }

  symbolValidationBySection(symbol, type) {
    if (type == "center") {
      if (symbol.validations.onlyCenter == true) {
        return true;
      }
    }
    if (type == "face") {
      if (symbol.validations.onlyFace == true) {
        return true;
      }
    }

    return false;
  }


  validationClickOnTeeth(object, symbol, typeZone) {
    console.log(symbol);
    if (typeZone == "center" || typeZone == "face") {
      if ((this.commonSymbolValidationFalse(symbol)) || (this.symbolValidationBySection(symbol, typeZone))) {
        return {
          status: true,
          message: "Seleccionada correctamente"
        };
      } else {
        return {
          status: false,
          message: "No se puede clickear esta cara"
        };
      }

    } else {
      console.log(typeZone)
    }

  }





  drawCenter(x, y, radius) {
    var click = false;
    var teethInstance = this;
    var center = new Konva.Circle({
      x: x,
      y: y,
      radius: radius,
      fill: 'white',
      stroke: 'black',
      strokeWidth: 1
    });
    var background = this.getInstanceImageBackground(this.getCurrentBackground());
    var symbol = this.getCurrentSymbol();
    center.on('mouseover', function () {
      document.getElementById("contenedor").style.cursor = 'pointer';
      if (click == false) {

        background.src = teethInstance.getCurrentBackground();
        this.fill("");
        this.fillPatternImage(background);
        // console.log(background);
    
        this.draw();
      }

    });

    center.on('mouseleave', function () {
      if (click == false) {
        this.fillPatternImage();
        this.fill("white");
        this.draw();
       
      }
      document.getElementById("contenedor").style.cursor = 'default';
    });

    center.on('click', function () {

      var symbol = teethInstance.getCurrentSymbol();
      var resultValidations = teethInstance.validationClickOnTeeth(center, symbol, "center");
      document.getElementById("contenedor").style.cursor = 'pointer';
      if (resultValidations.status == true) {
        this.fill("");
        this.fillPatternImage(background);
        // console.log(background);
       
        background.src = teethInstance.getCurrentBackground();
        click = true;
        this.draw();
        console.log(resultValidations.message);
      } else {
        console.log(resultValidations.message);
      }

    });


    return center;
  }





  drawFace(rotation, angle, stage, layer, x, y, color) {
    var teethInstance = this;
    let face = new Konva.Arc({
      x: x,
      y: y,
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

        background.src = teethInstance.getCurrentBackground();
        this.fill("");
        this.fillPatternImage(background);
        // console.log(background);
       
        this.draw();
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
       
        background.src = teethInstance.getCurrentBackground();
        click = true;
        this.draw();
        console.log(resultValidations.message);
      } else {
        console.log(resultValidations.message);
      }


    });

    face.on('mouseleave', function () {
      if (click == false) {
        this.fillPatternImage();
        this.fill("white");
        this.draw();
       
      }
      document.getElementById("contenedor").style.cursor = 'default';
    });

    return face;
  }












  drawContainer(x, y, minRadius, maxRadius) {
    var teethInstance = this;
    var center = new Konva.Arc({
      x: x,
      y: y,
      innerRadius: minRadius ,
      outerRadius:maxRadius  ,
      angle: 361,
      fill: "black",
      stroke: 'black',
      rotation: 0,
      strokeWidth: 1,

    });
    center.on('mouseover', function () {
      /* this.stroke("yellow");
       this.fill("yellow");*/
      this.moveToTop();

      this.draw();
      document.getElementById("contenedor").style.cursor = 'pointer';
    });

    center.on('mouseleave', function () {
      // this.stroke("black");
      // this.fill("black");
      this.moveToBottom();
      document.getElementById("contenedor").style.cursor = 'default';
      this.draw();

    });

    return center;

  }


}