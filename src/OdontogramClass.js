class odontogram extends QuadrantClass {

    /*Esta funcion divide el plano del odontograma
     * @param xmax tamaño maximo en x
     * @param ymax tamaño maximo en y
     */
    
    drawDivs(xmax, ymax) {

        var verticalLine = new Konva.Line({
            points: [xmax / 2, +40, xmax / 2, ymax  * .5 - 40],
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 1,
            closed: true
        });
        this.layer.add(verticalLine);

        var verticalLine2 = new Konva.Line({
            points: [xmax / 2, ymax/2 +40, xmax / 2, ymax -40],
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 1,
            closed: true
        });
        this.layer.add(verticalLine2);

 /*       var middleHorizontalLine = new Konva.Line({
            points: [0, ymax / 2, xmax, ymax / 2],
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 2,
            closed: true
        });*/

        var initialQuarterHOrizontal = new Konva.Line({
            points: [0, ymax / 4, xmax, ymax / 4],
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 2,
            closed: true
        });

        var finalQuarterHOrizontal = new Konva.Line({
            points: [0, ymax / 4 + ymax / 2, xmax, ymax / 4 + ymax / 2],
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 2,
            closed: true
        });


      //  this.layer.add(middleHorizontalLine);
     //   this.layer.add(middleHorizontalLine);
        this.layer.add(initialQuarterHOrizontal);
        this.layer.add(finalQuarterHOrizontal);

        this.layer.draw();
    }




    boyOdontogram(xinitial, yinitial, xmax, ymax) {
        var anchoOdontogram = xmax * .85 / 2;
        var altoOdontogram = ymax / 2;
        this.drawCuadrant(xmax, ymax, 1, yinitial, anchoOdontogram, altoOdontogram, "quadrant1Boy");
        this.drawCuadrantTitle(0 + 10, ymax / 2 + 10, 'I - Odontograma de Niño');
         this.drawCuadrant(xmax, ymax, 2, yinitial, anchoOdontogram, altoOdontogram, "quadrant2Boy");
        this.drawCuadrantTitle(xmax * .85 / 2 * 2-30, ymax / 2 + 10, 'II');
        this.drawCuadrant(xmax, ymax, 3, yinitial, anchoOdontogram, altoOdontogram , "quadrant4Boy");
        this.drawCuadrantTitle(0 + 10, ymax / 4 + ymax / 2 + 10, 'IV');
        this.drawCuadrant(xmax, ymax, 4, yinitial, anchoOdontogram, altoOdontogram,  "quadrant3Boy");
        this.drawCuadrantTitle(xmax * .85 / 2 * 2-30 , ymax / 4 + ymax / 2 + 10, 'III');



    }




    adultOdontogram(xinitial, yinitial, xmax, ymax) {
        var anchoOdontogram = xmax * .85 / 2;
        var altoOdontogram = ymax / 4;
        /**Dibuja el cuadrante 1 */
        this.drawCuadrant(xmax, ymax, 1, 1, anchoOdontogram, altoOdontogram, "quadrant1");
        this.drawCuadrantTitle(0 + 10, 0 + 10, 'I - Odontograma Adulto');
    
        this.drawCuadrant(xmax * .85 / 2, ymax, 2, 1, anchoOdontogram, altoOdontogram,"quadrant2");
        this.drawCuadrantTitle(xmax * .85 / 2 * 2-30 + 10, 0 + 10, 'II');
            /**Dibja el cuadrante 3 */
         this.drawCuadrant(xmax, ymax, 3, 1, anchoOdontogram, altoOdontogram, "quadrant4");
        this.drawCuadrantTitle(0 + 10, ymax / 4 + 10, 'IV');
        /*** Dibuja el cuadrante 4  */
         this.drawCuadrant(xmax, ymax, 4, 1, anchoOdontogram, altoOdontogram, "quadrant3");
         this.drawCuadrantTitle(xmax * .85 / 2 * 2-30, ymax / 4 + 10, 'III');
    }

    



}