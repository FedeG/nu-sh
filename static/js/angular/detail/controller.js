var nuShController = app.controller('nuShController', function ($scope, nuShService) {
  $scope.ambos = nuShService.getAmbos();
  $scope.chaquetas = nuShService.getChaquetas();
  $scope.pantalones = nuShService.getPantalones();
  $scope.contacts = nuShService.getContacts();
  $scope.talles = nuShService.getTalles();
  $scope.modals = [];
  $scope.modals = $scope.modals.concat($scope.ambos);
  $scope.modals = $scope.modals.concat($scope.chaquetas);
  $scope.modals = $scope.modals.concat($scope.pantalones);
  $scope.getId = nuShService.getId;
});
