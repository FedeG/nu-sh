var nuShController = app.controller('nuShController', function ($scope, nuShService) {

  nuShService.getContacts().then(
    function (response) {
      $scope.contacts = response.data;
    }
  );

  function filtrarProductos(tipo){
    return $scope.productos.filter(function(p){
      return p.tipo === tipo;
    });
  }

  nuShService.getProductos().then(
    function (response) {
      $scope.productos = response.data;
      $scope.ambos = filtrarProductos('ambo');
      $scope.chaquetas = filtrarProductos('chaqueta');
      $scope.pantalones = filtrarProductos('pantalon');
    }
  );

});
