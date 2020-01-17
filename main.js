

   

     




  /*


      var face2 = new Konva.Arc({
        x: stage.width() / 2,
        y: stage.height() / 2,
        innerRadius: 40,
        outerRadius: 70,
        angle: 90,
        fill: 'red',
        stroke: 'black',
        rotation:90,
        strokeWidth: 4,
       
      });


      var face3 = new Konva.Arc({
        x: stage.width() / 2,
        y: stage.height() / 2,
        innerRadius: 40,
        outerRadius: 70,
        angle: 90,
        fill: 'red',
        stroke: 'black',
        rotation:180,
        strokeWidth: 4,
       
      });

      var face4 = new Konva.Arc({
        x: stage.width() / 2,
        y: stage.height() / 2,
        innerRadius: 40,
        outerRadius: 70,
        angle: 90,
        fill: 'red',
        stroke: 'black',
        rotation:270,
        strokeWidth: 4,
       
      });

      face4.on('mouseover', function() {
        this.stroke("blue");
        this.fill("blue");
        layer.draw();
      });

      face4.on('mouseleave', function() {
        this.stroke("black");
        this.fill("red");

        layer.draw();
      });

  */

      class teeth
      {
         stage = new Konva.Stage({
            container: 'container',
            width: 800,
            height: 800
          });
          layer = new Konva.Layer();
          constructor(){
             
            
             
          }


          drawTeeth(x, y){
                // add the shape to the layer
                var faces = [
                    this.drawFace(0, 90, this.stage, this.layer,x, y),
                    this.drawFace(90, 90, this.stage, this.laye,x, y),
                    this.drawFace(180, 90, this.stage, this.laye,x, y),
                    this.drawFace(270, 90, this.stage, this.laye,x, y)
                ]
               
                for(var k=0;k<4;k++)
                {
                   
                   
                      this.layer.add(faces[k]);
                      this.layer.draw();
                }
                this.layer.draw();
                this.stage.add(this.layer);
             
          }

          drawFace(rotation, angle,  stage, layer, x, y){
           let face = new Konva.Arc({
                x: x,
                y: y,
                innerRadius: 40,
                outerRadius: 70,
                angle: angle,
                fill: 'red',
                stroke: 'black',
                rotation:rotation,
                strokeWidth: 4,
               
              });

              face.on('mouseover', function() {
                console.log("paso por encima");
                this.stroke("blue");
                this.fill("blue");
                this.draw();
              });

              face.on('mouseleave', function() {
                console.log("paso por encima");
                this.stroke("black");
                this.fill("red");
                this.draw();
              });

              return face;
          }
      }


       var teeths = new teeth();
       teeths.drawTeeth(200,200);
       teeths.drawTeeth(400,200);
       teeths.drawTeeth(200,200);