angular.module('grocery.controllers')
.controller('ItemsController', function($scope, $rootScope, $stateParams, $ionicLoading, Items) {

    $scope.refresh = function(){
        Items.all().then(function(data) {
            $scope.products = data;
            $scope.$broadcast('scroll.refreshComplete');
            $ionicLoading.hide();
        });
    }

    $scope.$on('refresh', function(event, args) {
        $scope.refresh();
    });

    if ($rootScope.data.postalCode != ''){
        $ionicLoading.show({ template: 'Chargement...' });
        $scope.refresh();
    }

    $scope.controller = "item";
    $scope.isNested = false;
    $scope.title = "Articles"
});
