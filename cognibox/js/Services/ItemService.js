angular.module('grocery.services')

.factory('Items', function($http, $ionicLoading, $rootScope, $ionicPopup) {
  // Might use a resource here that returns a JSON array
  return {
    all: function() {
      return $http.get(baseUrl + market + "/closest/publications/" + $rootScope.data.postalCode).then(function(data){
          var products = [];
          data.data.forEach(function(e){
              e.items.forEach(function(i){
                  i.title_fr = util.toUpper(i.title_fr);
                  i.words = i.search_key_words ? i.search_key_words.join(' ') : '';
                  products.push(i);
              });
          });
          return _.sortBy(products, 'category_fr');
      });
    },

      get: function(itemId, publicationId) {
        return $http.get(baseUrl + market + "/products/" + publicationId + '/' + itemId).then(function(data){
          var i = data.data;
          i.title_fr = util.toUpper(i.title_fr);
          i.words = i.search_key_words ? i.search_key_words.join(' ') : '';
          return i;
      });
      },

    getRecommended: function(item){
      return $http.post(baseUrl+ market+ "/recommended/products/"+$rootScope.data.postalCode,{key_words:item.key_words}).then(function(recommendedProducts){
        return recommendedProducts.data;
      });
    }
    };
  });
