var nuShService = app.service('nuShService', function ($http, API_URL) {

  this.getProductos = function () {
    return $http.get('/api/productos/');
  };

  this.getTalles = function () {
    return $http.get('/api/talles/');
  };

});
