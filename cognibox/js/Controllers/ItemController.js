angular.module('grocery.controllers')
  .controller('ItemController', function ($scope, $stateParams, Items, Stores)
  {
    Items.get($stateParams.itemId, $stateParams.publicationId).then(function(data){
        $scope.product = data;

        var pattern = new RegExp(/\d+/);
        $scope.product.effective_start_date  = pattern.exec($scope.product.effective_start_date)[0];
        $scope.product.effective_end_date  = pattern.exec($scope.product.effective_end_date)[0];
        Stores.getByBanner(util.bigBanner[$scope.product.banner_code]).then(function(data){
            $scope.nearStore = data[0];


          Items.getRecommended($scope.product).then(function(recommendedProducts){
            $scope.recommendedProducts = recommendedProducts;
          });
        });
    });



    $scope.controller = "item";
  });
