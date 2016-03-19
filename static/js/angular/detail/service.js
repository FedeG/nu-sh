var nuShService = app.service('nuShService', function ($http) {

  this.getProductos = function () {
    return $http.get('/api/productos/');
  };

  this.getTalles = function () {
    return $http.get('/api/talles/');
  };

});
