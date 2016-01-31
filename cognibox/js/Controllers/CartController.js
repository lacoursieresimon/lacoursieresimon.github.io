angular.module('grocery.controllers')
  .controller('CartController', function ($scope, $rootScope, $state, $stateParams, $ionicLoading, Cart)
  {
    $scope.cartProducts = localStorage.getObject("cartProducts") || [];
    $scope.controller = "cart";
    var itemId = $stateParams.itemId;

    $scope.getTotal = function () {
      var total = 0;
      $scope.cartProducts.forEach(function(p){
          total += p.price_number * p.CartQuantity;
      });
      $scope.totalPrice = total;
    };

    $scope.refresh = function (){
      $scope.cartProducts = Cart.all();
      $scope.$broadcast('scroll.refreshComplete');
      $scope.getTotal();
      $ionicLoading.hide();
    };

    $scope.$on('refresh', function (event, args){
      $scope.refresh();
    });

    $scope.$on("refreshCart", function (){
      $scope.refresh();
    });

    if (itemId === undefined && $rootScope.data.postalCode != '') {
      $scope.refresh();
      $scope.isNested = false;
    }
    else {
      $scope.product = _.find($scope.cartProducts, {identifier: itemId});
      var pattern = new RegExp(/\d+/);
      $scope.product.effective_start_date = pattern.exec($scope.product.effective_start_date)[0];
      $scope.product.effective_end_date = pattern.exec($scope.product.effective_end_date)[0];
    }

    $scope.deleteCart = function (product) {
      if ($scope.cartProducts.length > 0) {
        var product = _.findWhere($scope.cartProducts, {identifier: product.identifier});
        $scope.cartProducts = _.without($scope.cartProducts, product);
        localStorage.setObject("cartProducts", $scope.cartProducts);
        $scope.getTotal();
      }
    };
  });
