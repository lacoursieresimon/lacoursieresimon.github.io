angular.module('grocery.controllers')
  .controller('MapController', function ($scope, $rootScope, $stateParams, $ionicLoading, $compile, Stores, Cart)
  {
    var products = Cart.all();
    var storeTypes = [];
    var stores = [];
    var i = 0;
    $scope.letter = 'A';
    var latlng = localStorage.getObject("latlng");
    products.forEach(function (product)
    {
      var storeType = util.getMarketFromBanner(product.banner_code);
      if (storeTypes.indexOf(storeType) == -1)
      {
        storeTypes.push(storeType);
      }
    });

    $scope.loadMap = function ()
    {
      $scope.validStores = [];
      products.forEach(function (product)
      {
        var store = _.find(stores, function (s)
        {
          return s.banner_code == product.banner_code;
        });
        if ($scope.validStores.indexOf(store) == -1)
        {
          $scope.validStores.push(store);
        }
      });

      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer;
      var distanceService = new google.maps.DistanceMatrixService();

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: latlng
      });

      var waypts = [];
      $scope.validStores.forEach(function (s)
      {
        waypts.push({
          location: {lat: s.latitude, lng: s.longitude},
          stopover: true
        });
      });

      var mapOptions = {center: latlng, zoom: 16, mapTypeId: google.maps.MapTypeId.ROADMAP};
      $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
      directionsDisplay.setMap($scope.map);

      directionsService.route({
        origin: latlng,
        destination: $rootScope.data.postalCode,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING
      }, function (response, status)
      {
        if (status === google.maps.DirectionsStatus.OK)
        {
          directionsDisplay.setDirections(response);
        }
        else
        {
          window.alert('Directions request failed due to ' + status);
        }
      });
      var origins = [];
      origins.push(latlng);

      var destinations = [];
      _.each(waypts, function(s){
        destinations.push(new google.maps.LatLng(parseFloat(s.location.lat), parseFloat(s.location.lng)));
      });

      console.log(destinations)
      distanceService.getDistanceMatrix(
        {
          origins: origins,
          destinations: waypts,
          travelMode: google.maps.TravelMode.DRIVING,
          avoidHighways: false,
          avoidTolls: false,
        }, drivingCallback);

      function drivingCallback(response, status)
      {
        console.log(response);
        console.log(status);
      }
    }

    storeTypes.forEach(function (type)
    {
      Stores.getByMarket(type).then(function (data)
      {
        stores = stores.concat(data);
        i++;
        if (i == storeTypes.length)
        {
          $scope.loadMap();
        }
      });
    });
  });
