var nuShController = app.controller('nuShController', function ($scope, nuShService) {

  nuShService.getProductos().then(
    function (response) {
      $scope.productos = response.data;
      $scope.producto = getId();
    }
  );

  nuShService.getTalles().then(
    function (response) {
      $scope.talles = response.data;
    }
  );

  function getId(){
    var cod = location.search.split('cod=')[1];
    return $scope.productos.filter(function (elem) {
      return elem.codigo === cod;
    }).pop();
  }

  $scope.showModal = false;
  $scope.toggleModal = function(){
    $scope.showModal = !$scope.showModal;
  };
});
