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

app.directive('modal', function () {
  return {
    template: '<div class="modal fade">' +
    '<div class="modal-dialog">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
    '<h4 class="modal-title">{{ title }}</h4>' +
    '</div>' +
    '<div class="modal-body" ng-transclude></div>' +
    '</div>' +
    '</div>' +
    '</div>',
    restrict: 'E',
    transclude: true,
    replace:true,
    scope:true,
    link: function postLink(scope, element, attrs) {
      scope.title = attrs.title;

      scope.$watch(attrs.visible, function(value){
        $(element).modal((value) ? 'show':'hide');
      });

      $(element).on('shown.bs.modal', function(){
        scope.$apply(function(){
          scope.$parent[attrs.visible] = true;
        });
      });

      $(element).on('hidden.bs.modal', function(){
        scope.$apply(function(){
          scope.$parent[attrs.visible] = false;
        });
      });
    }
  };
});
