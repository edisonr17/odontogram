var app = angular.module("odontogramApp", []);

app.controller("myCtrl", function ($scope) {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
});



app.directive('sgloOdontogram', function () {


  function link(scope, element, attrs) {

    var stage = new Konva.Stage({
      container: 'container',
      width: 1200,
      height: 800
    });
    var layer = new Konva.Layer();
    var odontogramClass = new odontogram(stage, layer);
    
    odontogramClass.adultOdontogram(20, 20, 900, 700);
    odontogramClass.boyOdontogram(0,0, 900, 700);
    odontogramClass.drawDivs(900 * .85 , 700);
    odontogramClass.drawTools(900 * .90 , 60, 1024, 700, 4, 22, 22);

  }


  return {
    link: link,
    transclude: false,
    templateUrl: 'teeth.html'
  };
});

/*









//odontogramClass.drawForExample();*/