
//Función que divide las linas del canvas

function dividirCanvas(){

    context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.lineWidth = 0.5;
    context.moveTo(middleX / 2, 0);
    context.lineTo(middleX / 2, middleY);
    context.stroke();
    context.closePath();


    context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.lineWidth = 1;
    context.moveTo(0, middleY / 4);
    context.lineTo(middleX, middleY / 4);
    context.stroke();
    context.closePath();


    context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.lineWidth = 1;
    context.moveTo(0, middleY / 2);
    context.lineTo(middleX, middleY / 2);
    context.stroke();
    context.closePath();


    context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.lineWidth = 1;
    context.moveTo(0, (middleY / 4) * 3);
    context.lineTo(middleX, (middleY / 4) * 3);
    context.stroke();
    context.closePath();
};





function adultOdontogram(middleX, middleY){
    var anchoCuadrante1 = middleX / 2;
    var altoCuadrante1 = middleY / 4;

    for (var k = 1; k < 9; k++) {
        TeethInstance.drawTeeth((anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5), altoCuadrante1 / 2, 20, 10, 0.5, "#DA96D7");
    }
    context.fillStyle = "black"; //color de relleno
    context.font = "bold 20px arial"; //estilo de texto
    context.fillText("Cuadrante 1", anchoCuadrante1 / 3, altoCuadrante1 / 5);

    for (var k = 1; k < 9; k++) {
        TeethInstance.drawTeeth((anchoCuadrante1 + (anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5)), altoCuadrante1 / 2, 20, 10, 0.5, "#DA96D7");
    }

    context.fillStyle = "black"; //color de relleno
    context.font = "bold 20px arial"; //estilo de texto
    context.fillText("Cuadrante 2", (anchoCuadrante1 / 3) + anchoCuadrante1, altoCuadrante1 / 5);



    for (var k = 1; k < 9; k++) {
        TeethInstance.drawTeeth((anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5), (altoCuadrante1 / 2) + altoCuadrante1, 20, 10, 0.5, "#DA96D7");
    }
    context.fillStyle = "black"; //color de relleno
    context.font = "bold 20px arial"; //estilo de texto
    context.fillText("Cuadrante 4", anchoCuadrante1 / 3, (altoCuadrante1 / 5) + altoCuadrante1);



    for (var k = 1; k < 9; k++) {
        TeethInstance.drawTeeth((anchoCuadrante1 + (anchoCuadrante1 / 8 * k) - ((anchoCuadrante1 / 8) * 0.5)), (altoCuadrante1 / 2) + altoCuadrante1, 20, 10, 0.5, "#DA96D7");
    }
    context.fillStyle = "black"; //color de relleno
    context.font = "bold 20px arial"; //estilo de texto
    context.fillText("Cuadrante 3", anchoCuadrante1 + anchoCuadrante1 / 3, (altoCuadrante1 / 5) + altoCuadrante1);

}


