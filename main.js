
var stage = new Konva.Stage({
    container: 'container',
    width: 1200,
    height: 700
  });
var layer = new Konva.Layer();


var odontogramClass = new odontogram(stage, layer);
odontogramClass.adultOdontogram(20, 20, 900, 700);
odontogramClass.boyOdontogram(0,0, 900, 700);
odontogramClass.drawDivs(900 * .85 , 700);
odontogramClass.drawTools(900 * .90 , 60, 1024, 700, 4, 20, 20);
//odontogramClass.drawForExample();

