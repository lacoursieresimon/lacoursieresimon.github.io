angular.module('grocery.controllers')
  .controller('CategoryController', function ($scope, $stateParams, Categories, $ionicLoading, Items, Stores)
  {
    $scope.title='Catégorie';
    var itemId = $stateParams.itemId;
    $scope.refresh = function ()
    {
      var categoryId = $stateParams.categoryId;
      Categories.allFromCategory(categoryId).then(function (data)
      {
        $scope.products = data;
        console.log(data);
        $scope.title = $scope.products[0].category_fr;
        $ionicLoading.hide();
      });
    };
    if (itemId === undefined)
    {
      console.log("no item");
      $scope.refresh();
      $scope.controller = "category";
      $scope.isNested = true;
    }
    else
    {
      Items.get(itemId, $stateParams.publicationId).then(function (product)
      {
        $scope.product = product;
        $scope.title = $scope.product.category_fr;
        var pattern = new RegExp(/\d+/);
        $scope.product.effective_start_date = pattern.exec($scope.product.effective_start_date)[0];
        $scope.product.effective_end_date = pattern.exec($scope.product.effective_end_date)[0];

        Stores.getByBanner(util.bigBanner[$scope.product.banner_code]).then(function(data){
          $scope.nearStore = data[0];
        });
      });
    }

    $scope.$on('refresh', function (event, args)
    {
      $scope.refresh();
    });
  });
