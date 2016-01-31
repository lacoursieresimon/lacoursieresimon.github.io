angular.module('grocery.controllers')
.controller('StoresController', function($scope, $rootScope, $stateParams, $ionicLoading, Stores) {

    $scope.refresh = function(){
        Stores.all().then(function(data) {
            $scope.stores = data;
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
});
