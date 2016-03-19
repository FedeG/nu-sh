var nuShService = app.service('nuShService', function ($http) {

  this.getEncargo = function (number) {
    return $http.get('/encargo/' + number);
  };

});
