var nuShService = app.service('nuShService', function ($http) {

  this.getProductos = function () {
    return $http.get('/api/productos/');
  };

  this.getContacts = function() {
    return $http.get('/api/contactos/');
  };

});
