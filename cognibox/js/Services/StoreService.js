angular.module('grocery.services')
.factory('Stores', function($http, $rootScope) {
  return {
    all: function () {
        return $http.get(baseUrl + market + '/stores/' + $rootScope.data.postalCode).then(function(data){
            return _.sortBy(data.data, 'distance');;
         });
    },
    get: function (storeId) {
        return $http.get(baseUrl + market + '/stores/' + $rootScope.data.postalCode).then(function(data){
            return _.find(data.data, function(x){ return x.guid == storeId; });
        });
    },
    getForCartItem: function (storeId, banner_code) {
        var current_market = banner_code ? util.getMarketFromBanner(banner_code) : market;
        return $http.get(baseUrl + current_market + '/stores/' + $rootScope.data.postalCode).then(function(data){
            return _.find(data.data, function(x){ return x.guid == storeId; });
        });
    },
    getByBanner: function(banner_code){
        return $http.get(baseUrl + market + '/stores/' + banner_code + '/' + $rootScope.data.postalCode).then(function(data){
            return _.sortBy(data.data, 'distance');
        });
    },
    getByMarket: function(current_market){
        return $http.get(baseUrl + current_market + '/stores/' + $rootScope.data.postalCode).then(function(data){
            return _.sortBy(data.data, 'distance'); 
        });
    },
    getNearestMarkets: function(){
        return $http.get(baseUrl + market + '/stores/' + $rootScope.data.postalCode).then(function(data){
            var markets = {};
            _.sortBy(data.data, 'distance').forEach(function(m){
                if (!markets[m.banner_code])
                    markets[m.banner_code] = m;
            });
            return markets; 
        });
    }
  };
});
