angular.module('grocery.services')

  .factory('Cart', function() {
    // Might use a resource here that returns a JSON array

    return {
      all: function() {
        return localStorage.getObject("cartProducts") || [];
      }
    };
  });
