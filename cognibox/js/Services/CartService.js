angular.module('grocery.services')

  .factory('Cart', function($http,$rootScope) {
    // Might use a resource here that returns a JSON array

    return {
      all: function() {
        return localStorage.getObject("cartProducts") || [];
      },
      getGazPrice: function(distance){
        var req = {
          method: 'POST',
          url: "http://www.gasbuddy.com/Home/Search",
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          data: {s:$rootScope.data.postalCode}
        }
          return $http.post(req).then(function(data){
            var cost = data.stations[0].Fuels[0].Amount;
            var numberLiters = distance/9;
            return cost*numberLiters;
          });
      }
    };

  });
