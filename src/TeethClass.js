class TeethClass extends BaseOdontogram {


  currentBackground = "./resources/symbols/implante.png";

    /**
   * Esta función se usa para agrupar cada seccion del diente como un todo0
   */
  getGroup(id) {

    var click = false;
    var background = this.getInstanceImageBackground(this.getCurrentBackground());
    var teethInstance = this;
    var stage = this.stage;
    var group = new Konva.Group({
      draggable: true,
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
      console.log("Has clickeado en el diente: " + this.id());
      var symbol = teethInstance.getCurrentSymbol();
      console.log(symbol);
      if (!click) {
        if(symbol != null){
          if(symbol.validations.fullTeeth == true)
          { 
            console.log("Se peude aplicar");
            click = true;
         //   this.opacity(0.5);
          }
          else
          {
            console.log("No se pede aplicar al diente completo");
          }
        }
        else
        {
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
   * Metodo que dibuja un diente completo
   */
  drawTeeth(x, y, teethId) {

    console.log(teethId);
    var background = this.getInstanceImageBackground(this.getCurrentBackground());
    var symbol = this.getCurrentSymbol();
    var group = this.getGroup(teethId);
    
    
    var teethInstance = this;


    // add the shape to the layer
    var faces = [
      this.drawFace(0 - 45, 90, this.stage, this.layer, x, y, "white"),
      this.drawFace(90 - 45, 90, this.stage, this.layer, x, y, "white"),
      this.drawFace(180 - 45, 90, this.stage, this.layer, x, y, "white"),
      this.drawFace(270 - 45, 90, this.stage, this.layer, x, y, "white")
    ];
    group.add(this.drawContainer(x, y, 18,22));
    group.add(this.fullTeethContainer(x, y, 22));
    group.add(this.drawCenter(x, y, 8));

    for (var k = 0; k < 4; k++) {
      group.add(faces[k]);
     
    }

 

    this.layer.add(group);
    this.layer.draw();

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
        this.stroke("blue");
        this.strokeWidth(2);
        this.fillPatternImage(background);
        // console.log(background);
    
        this.draw();
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
      var resultValidations = teethInstance.validationClickOnTeeth(center, symbol, "center");
      document.getElementById("contenedor").style.cursor = 'pointer';
      if (resultValidations.status == true) {
        this.fill("");
        this.fillPatternImage(background);
        // console.log(background);
        this.strokeWidth(1);

        this.stroke("black");
        background.src = teethInstance.getCurrentBackground();
        click = true;
        this.draw();
    //    console.log(resultValidations.message);
      } else {
     //   console.log(resultValidations.message);
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
        this.stroke("green");
        this.strokeWidth(2);
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
        this.draw();
       
      }
      document.getElementById("contenedor").style.cursor = 'default';
    });

    return face;
  }












  drawContainer(x, y, minRadius, maxRadius) {
    var teethInstance = this;
    var center = new Konva.Ring({
      x: x,
      y: y,
      innerRadius: minRadius ,
      outerRadius:maxRadius  ,
      angle: 361,
      fill: "#2E9AFE",
      stroke: 'black',
      rotation: 0,
      strokeWidth: 1,

    });
    center.on('mouseover', function () {
      /*this.stroke("yellow");
       this.fill("yellow");
     */ this.moveToTop();
      this.fill("#5858FA");
      this.draw();
      document.getElementById("contenedor").style.cursor = 'pointer';
    });

    center.on('mouseleave', function () {
      // this.stroke("black");
      // this.fill("black");

      this.fill("#2E9AFE");
      document.getElementById("contenedor").style.cursor = 'default';
      this.draw();

    });

    return center;

  }





  fullTeethContainer(x, y, radius) {
    var teethInstance = this;
    var stage = this.stage;
    var background = this.getInstanceImageBackground();
    var symbol = this.getCurrentSymbol();
   var circle = new Konva.Circle({
      x: x,
      y: y,
      radius: radius,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4
    });
    circle.on('mouseover', function () {
      /*this.stroke("yellow");
       this.fill("yellow");
       
     */
    background.src = teethInstance.getCurrentBackground();
     this.moveToTop();
     this.fill("");
     this.fillPatternImage(background);
    // this.opacity(8);     

    this.fillPatternOffset({
      x: 20,
      y: 20
    });
          this.opacity(0.9);     

      document.getElementById("contenedor").style.cursor = 'pointer';
      stage.draw();
    });

    circle.on('mouseleave', function () {
      this.fillPatternImage();
         
      this.fillPatternImage(background);

    

      document.getElementById("contenedor").style.cursor = 'default';
      stage.draw();

    });

    return circle;

  }
  

};





