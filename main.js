var elCanvas = document.getElementById("canvas");
var context = elCanvas.getContext("2d");

var TeethInstance = new Teeth(elCanvas, context);




var init = 40;

var middleX = elCanvas.width;
var middleY = elCanvas.height;
console.log("Ancho del canvas x " + middleX);
console.log("Ancho del canvas y " + middleY);


dividirCanvas(middleX, middleY);
adultOdontogram(middleX, middleY);


