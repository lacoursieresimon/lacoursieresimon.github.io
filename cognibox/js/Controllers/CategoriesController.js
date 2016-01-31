angular.module('grocery.controllers')
  .controller('CategoriesController', function ($scope, $rootScope, $stateParams, $ionicLoading, Categories)
  {
    $scope.refresh = function (){
      Categories.all($rootScope.data.postalCode).then(function (data) {
        $scope.categories = data;
        $scope.$broadcast('scroll.refreshComplete');
        $ionicLoading.hide();
      });
    };

    $scope.$on('refresh', function (event, args){
      $scope.refresh();
    });

    if ($rootScope.data.postalCode != ''){
        $ionicLoading.show({ template: 'Chargement...' });
      $scope.refresh();
    }
  });
