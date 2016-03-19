var nuShController = app.controller('nuShController', function ($scope, $window, nuShService) {

  nuShService.getEncargo(location.search.split('number=')[1]).then(
    function (response) {
      $scope.encargo = response.data;
      $scope.producto = $scope.encargo.producto;
      $scope.talle = $scope.encargo.talle;
    }
  );

  $scope.showModal = true;
  $scope.toggleModal = function(){
    $scope.showModal = !$scope.showModal;
  };

  $scope.printIt = function() {
    window.print();
  };

});
