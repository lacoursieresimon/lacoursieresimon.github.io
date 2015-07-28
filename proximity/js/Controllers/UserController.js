angular.module('proximity.controllers')
.controller('UserController', function ($scope, $ionicPopup, $ionicLoading, $http, Users) {
    $scope.$on('connected', function(event, args) {
        $scope.users = Users.all();
    });
    
    if (user != null){
        $scope.users = Users.all();
    }
    
    $scope.remove = function(user) {
        Users.remove(user);
    };
});