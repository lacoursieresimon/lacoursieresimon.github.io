angular.module('proximity.controllers').controller('LoginController', function ($scope, $ionicPopup, $ionicModal, $http) {

    $ionicModal.fromTemplateUrl('templates/login-modal.html', { scope: $scope }).then(function (modal) {
        $scope.loginModal = modal;
        
        if (userCheck){
            $scope.setUser();
            userCheck = false;
        }
    });
    
    $scope.setUser = function(){
        if (localStorage.user){
            user = localStorage.user;
            $scope.$broadcast('connected');
        }
        else {
            $scope.username = '';
            $scope.loginModal.show();
        }
    };
    
    $scope.connect = function(username){
        // connect to socket
        
        // -> if success
        $scope.loginModal.hide();
        user = { id: 0, name: username, type: "WEB" };
        $scope.user = user;
        $scope.$broadcast('connected');
        //localStorage.user = response;
        
        // -> if error
        // show ionicPopup error message.
    };
});