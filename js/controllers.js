angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, Workgroups) {})

.controller('SourcesCtrl', function($scope, $ionicModal, $ionicLoading, $http, Sources) {
  $ionicModal.fromTemplateUrl('templates/new-source.html', { scope: $scope }).then(function(modal) { $scope.modal = modal; });
  $scope.closeNewSource = function() { $scope.modal.hide(); };
  $scope.openNewSource = function() { $scope.modal.show(); };
  
  $scope.doRefresh = function() {
    Sources.reset();
    Sources.all().then(function(result) { $scope.sources = result; });
    $scope.$broadcast('scroll.refreshComplete');
  };
  
  Sources.all().then(function(result) { $scope.sources = result; });
})


.controller('SourceDetailCtrl', function($scope, $stateParams, Sources) {
  $scope.source = Sources.get($stateParams.ID);
})


.controller('WorkgroupsCtrl', function($scope, $ionicModal, $ionicLoading, $http, Workgroups) {
  $ionicModal.fromTemplateUrl('templates/tab-workgroups.html', { scope: $scope }).then(function(modal) {
    Workgroups.all().then(function(result) { $scope.workgroups = result; });
    $scope.modal = modal;
    $scope.showWorkgroupModal();
  });
  
    $scope.setCurrentWorkgroup = function(id){
      Workgroups.setCurrentWorkgroup(id);
      $scope.closeWorkgroupModal();
    };
    
    $scope.showWorkgroupModal = function(){ if (!$scope.modal.isShown()) $scope.modal.show(); };
    $scope.closeWorkgroupModal = function(){ $scope.modal.hide(); };
})


.controller('UsersCtrl', function($scope, $ionicModal, $ionicLoading, $http, Users) {
  $ionicModal.fromTemplateUrl('templates/new-user.html', { scope: $scope }).then(function(modal) { $scope.modal = modal; });
  $scope.closeNewUser = function() { $scope.modal.hide(); };
  $scope.openNewUser = function() { $scope.modal.show(); };
  
  $scope.doRefresh = function() {
    Users.reset();
    Users.all().then(function(result) { $scope.users = result; });
    $scope.$broadcast('scroll.refreshComplete');
  };
  
  Users.all().then(function(result) { $scope.users = result; });
})


.controller('SourceDetailCtrl', function($scope, $stateParams, Sources) {
  $scope.source = Sources.get($stateParams.ID);
})


.controller('ServersCtrl', function($scope, $ionicLoading, $http, Servers) {
    Servers.all().then(function(result) { $scope.servers = result; });
})


.controller('ServerDetailCtrl', function($scope, $stateParams, Servers) {
  $scope.server = Servers.get($stateParams.ID);
})


.controller('ResultsCtrl', function($scope, $ionicLoading, $http, Results) {
    $ionicLoading.show({  template: 'Loading...' });
    $scope.searchTerm = {text:''};
    Results.all($scope.searchTerm.text).then(function(result) { $scope.results = result; $ionicLoading.hide(); });
    
    $scope.doRefresh = function() {
      $ionicLoading.show({  template: 'Loading...' });
      Results.all($scope.searchTerm.text).then(function(result) { $scope.results = result; $ionicLoading.hide(); });
  };
});

