angular.module('grocery.controllers')
  .controller('MapController', function ($scope, $rootScope, $stateParams, $ionicLoading, $compile, Stores, Cart)
  {
    var products = Cart.all();
    var storeTypes = [];
    var stores = [];
    var i = 0;
    $scope.letter = 'A';
    $scope.gazPrice = "";
    var latlng = localStorage.getObject("latlng");
    products.forEach(function (product)
    {
      var storeType = util.getMarketFromBanner(product.banner_code);
      if (storeTypes.indexOf(storeType) == -1)
      {
        storeTypes.push(storeType);
      }
    });

    $scope.nextChar = function ()
    {
      var letter = $scope.letter.charCodeAt(0);
      $scope.letter = String.fromCharCode(letter + 1);
      return $scope.letter;
    }

    $scope.loadMap = function (travelMode)
    {
      $scope.carDistance = 0;
      $scope.carTime = 0;
      $scope.walkDistance = 0;
      $scope.walkTime = 0;
      $scope.bicycleDistance = 0;
      $scope.bicycleTime = 0;

      if (travelMode===undefined){
        travelMode = google.maps.TravelMode.DRIVING;
      }else{
        switch(travelMode){
          case 'DRIVING':
            travelMode = google.maps.TravelMode.DRIVING;
                break;
          case 'WALKING':
            travelMode = google.maps.TravelMode.WALKING;
            break;
          case 'BICYCLING':
            travelMode = google.maps.TravelMode.BICYCLING;
            break;
          case 'TRANSIT':
            travelMode = google.maps.TravelMode.TRANSIT;
            break;
        }
      }
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
        travelMode: travelMode
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
      var transitOptions = {
        modes: [google.maps.TransitMode.BUS,google.maps.TransitMode.RAIL,google.maps.TransitMode.SUBWAY,google.maps.TransitMode.TRAIN,google.maps.TransitMode.TRAM]
      };

      distanceService.getDistanceMatrix(
        {
          origins: origins,
          destinations: destinations,
          travelMode: google.maps.TravelMode.DRIVING,
          avoidHighways: false,
          avoidTolls: false,
        }, drivingCallback);

      distanceService.getDistanceMatrix(
        {
          origins: origins,
          destinations: destinations,
          travelMode: google.maps.TravelMode.WALKING,
          avoidHighways: false,
          avoidTolls: false,
        }, walkingCallback);

      distanceService.getDistanceMatrix(
        {
          origins: origins,
          destinations: destinations,
          travelMode: google.maps.TravelMode.BICYCLING,
          avoidHighways: false,
          avoidTolls: false,
        }, bicycleCallback);

      function extendValidStores(elements){
        var extendedStores =[];
        for (var i = 0;i < $scope.validStores.length;i++){
          var element = elements[i];
          var store =$scope.validStores[i];
          store = _.extend(store,{distance:element.distance.text,time:element.duration.text});
          extendedStores.push(store);
        }
        $scope.validStores = extendedStores;
      }

      function drivingCallback(response, status)
      {
        $scope.carDistance = 0;
        $scope.carTime = 0;


        var elements = response.rows[0].elements;

        _.each(elements,function(element){
          $scope.carDistance += element.distance.value;
          $scope.carTime += element.duration.value;
        });
        var distance = $scope.carDistance/1000;
        $scope.carDistance = distance+"km";
        $scope.carTime = moment.duration($scope.carTime/60, "minutes").humanize();
        extendValidStores(elements);
      }

      function walkingCallback(response, status)
      {
        $scope.walkDistance = 0;
        $scope.walkTime = 0;

        var elements = response.rows[0].elements;

        _.each(elements,function(element){
          $scope.walkDistance += element.distance.value;
          $scope.walkTime += element.duration.value;
        });
        $scope.walkDistance = $scope.walkDistance/1000+"km";
        $scope.walkTime = moment.duration($scope.walkTime/60, "minutes").humanize();
       // extendValidStores(elements);
      }

      function bicycleCallback(response, status)
      {
        $scope.bicycleDistance = 0;
        $scope.bicycleTime = 0;
        var elements = response.rows[0].elements;


        _.each(elements,function(element){
          $scope.bicycleDistance += element.distance.value;
          $scope.bicycleTime += element.duration.value;
        });
        $scope.bicycleDistance = $scope.bicycleDistance/1000+"km";
        $scope.bicycleTime = moment.duration($scope.bicycleTime/60, "minutes").humanize();
        //extendValidStores(elements);
      }

    };

    $scope.init = function(){
      $scope.loadMap('DRIVING');
    };

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
