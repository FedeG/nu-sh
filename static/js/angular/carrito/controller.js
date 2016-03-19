app.controller('ProductosController', ['$scope', 'ProductosService', 'CarritoService',
    function ($scope, prodService, carService) {
      $scope.productos = [];

      $scope.agregar = function (p) {
        carService.agregar(p);
      };

      $scope.formatoMoneda = function (valor) {
        var value = parseFloat(valor);
        return "S/." + Math.floor(value) + "." + (value * 100) % 100;
      };

      prodService.listar(function (data) {
        $scope.productos = data;
      });

    }]
);


app.controller('CarritoController', ['$scope', 'CarritoService',
    function ($scope, carService) {
      $scope.carrito = [];

      carService.carrito = $scope.carrito;

      $scope.precioTotal = function () {
        var total = 0;
        angular.forEach($scope.carrito, function (item) {
          total = total + (item.Cantidad * item.Producto.Precio);
        });

        return total;
      };

      $scope.eliminar = function (item) {
        carService.eliminar(item);
      };

    }]
);