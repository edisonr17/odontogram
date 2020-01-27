class teeth {
  stage = new Konva.Stage({
    container: 'container',
    width: 1200,
    height: 600
  });
  layer = new Konva.Layer();


  constructor() {



  }

  getStage() {
    return this.stage;
  }

  drawTeeth(x, y) {
    // add the shape to the layer
    var faces = [
      this.drawFace(0 - 45, 90, this.stage, this.layer, x, y, "white"),
      this.drawFace(90 - 45, 90, this.stage, this.layer, x, y, "white"),
      this.drawFace(180 - 45, 90, this.stage, this.layer, x, y, "white"),
      this.drawFace(270 - 45, 90, this.stage, this.layer, x, y, "white")
    ]
    this.layer.add(this.drawContainer(x, y));
    this.layer.add(this.drawCenter(x, y));

    for (var k = 0; k < 4; k++) {


      this.layer.add(faces[k]);
      this.layer.draw();
    }


    this.layer.draw();
    this.stage.add(this.layer);

  }

  drawCenter(x, y) {
    var center = new Konva.Circle({
      x: x,
      y: y,
      radius: 8,
      fill: 'white',
      stroke: 'black',
      strokeWidth: 1
    });

    center.on('mouseover', function () {
      this.stroke("green");
      this.fill("#F3F781");
      document.getElementById("contenedor").style.cursor = 'pointer';

      this.draw();
    });

    center.on('mouseleave', function () {
      this.stroke("black");
      this.fill("white");
      this.draw();
      document.getElementById("contenedor").style.cursor = 'default';

    });
    return center;

  }

  drawFace(rotation, angle, stage, layer, x, y, color) {
    let face = new Konva.Arc({
      x: x,
      y: y,
      innerRadius: 8,
      outerRadius: 18,
      angle: angle,
      fill: color,
      stroke: 'black',
      rotation: rotation,
      strokeWidth: 1.5
    });

 

    face.on('mouseover', function () {
      this.stroke("green");
     // this.fill("green");
      document.getElementById("contenedor").style.cursor = 'pointer';
      var background = new Image();
      background.onload = function() {
        face.fillPatternImage(background);
      };
      background.src = 'https://cdn.pixabay.com/photo/2016/03/28/09/22/blue-image-1285095_960_720.png';
     

      this.draw();

    });

    face.on('mouseleave', function () {
      this.stroke("black");
      this.fill(color);
      this.draw();
      document.getElementById("contenedor").style.cursor = 'default';

    });

    return face;
  }

  drawContainer(x, y) {
    var center = new Konva.Arc({
      x: x,
      y: y,
      innerRadius: 18,
      outerRadius: 22,
      angle: 361,
      fill: "black",
      stroke: 'black',
      rotation: 0,
      strokeWidth: 1

    });
    center.on('mouseover', function () {
      this.stroke("yellow");
      this.fill("yellow");
      this.draw();
      document.getElementById("contenedor").style.cursor = 'pointer';
    });

    center.on('mouseleave', function () {
      this.stroke("black");
      this.fill("black");
      this.draw();
      document.getElementById("contenedor").style.cursor = 'default';

    });

    return center;

  }


}