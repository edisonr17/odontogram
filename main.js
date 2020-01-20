

class teeth {
  stage = new Konva.Stage({
    container: 'container',
    width: 1000,
    height: 600
  });
  layer = new Konva.Layer();
  constructor() {



  }


  drawTeeth(x, y) {
    // add the shape to the layer
    var faces = [
      this.drawFace(0 - 45, 90, this.stage, this.layer, x, y, "#58FAF4"),
      this.drawFace(90 - 45, 90, this.stage, this.layer, x, y, "#F781D8"),
      this.drawFace(180 - 45, 90, this.stage, this.layer, x, y, "#D8F781"),
      this.drawFace(270 - 45, 90, this.stage, this.layer, x, y, "#F79F81")
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
      radius: 12,
      fill: '#01DF3A',
      stroke: 'black',
      strokeWidth: 1
    });

    center.on('mouseover', function () {
      this.stroke("green");
      this.fill("#F3F781");
      this.draw();
    });

    center.on('mouseleave', function () {
      this.stroke("black");
      this.fill("#01DF3A");
      this.draw();
    });
    return center;

  }

  drawFace(rotation, angle, stage, layer, x, y, color) {
    let face = new Konva.Arc({
      x: x,
      y: y,
      innerRadius: 12,
      outerRadius: 24,
      angle: angle,
      fill: color,
      stroke: 'black',
      rotation: rotation,
      strokeWidth: 1.5
    });

    face.on('mouseover', function () {
      this.stroke("green");
      this.fill("white");
      this.draw();
    });

    face.on('mouseleave', function () {
      this.stroke("black");
      this.fill(color);
      this.draw();
    });

    return face;
  }

  drawContainer(x, y) {
    var center = new Konva.Arc({
      x: x,
      y: y,
      innerRadius: 24,
      outerRadius: 27,
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
    });

    center.on('mouseleave', function () {
      this.stroke("black");
      this.fill("black");
      this.draw();
    });

    return center;

  }


}


var teeths = new teeth();

adultOdontogram(1024, 600, teeths);

function adultOdontogram(middleX, middleY, TeethInstance) {
  var anchoCuadrante1 = middleX*.8 / 2;
  var altoCuadrante1 = middleY*.8 / 4;

  for (var k = 1; k < 9; k++) {
    TeethInstance.drawTeeth((anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5), altoCuadrante1 / 2);
  }

  for (var k = 1; k < 9; k++) {
    TeethInstance.drawTeeth((anchoCuadrante1 + (anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5)), altoCuadrante1 / 2);
  }
  for (var k = 1; k < 9; k++) {
    TeethInstance.drawTeeth((anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5), (altoCuadrante1 / 2) + altoCuadrante1 * .7);
  }

  for (var k = 1; k < 9; k++) {
    TeethInstance.drawTeeth((anchoCuadrante1 + (anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5)), (altoCuadrante1 / 2) + altoCuadrante1 * .7);
  }

}


boyOdontogram(1024, 600, teeths);

function boyOdontogram(middleX, middleY, TeethInstance) {
  var anchoCuadrante1 = middleX*.8 / 2;
  var altoCuadrante1 = middleY*.8 / 2;

  for (var k = 1; k < 9; k++) {
    if (k > 3) {
      TeethInstance.drawTeeth((anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5), altoCuadrante1 + 100);

    }
  }

  for (var k = 1; k < 9; k++) {
    if (k < 6) {
      TeethInstance.drawTeeth((anchoCuadrante1 + (anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5)), altoCuadrante1 + 100);
    }
  }
  for (var k = 1; k < 9; k++) {
    if (k > 3) {
      TeethInstance.drawTeeth((anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5), (altoCuadrante1 / 2 + altoCuadrante1 + 50));
    }
  }

  for (var k = 1; k < 9; k++) {
    if (k < 6) {
      TeethInstance.drawTeeth((anchoCuadrante1 + (anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5)), ((altoCuadrante1 / 2) + altoCuadrante1) + 50);
    }
  }

}


class tools
{
  showTools(){

  }
}