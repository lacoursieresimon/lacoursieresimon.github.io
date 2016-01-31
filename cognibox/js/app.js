// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('grocery', ['ionic', 'grocery.controllers', 'grocery.services'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    $rootScope.util = window.util;
    $rootScope.market = window.market;
    
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.category', {
      url: '/category',
      views: {
        'tab-category': {
          templateUrl: 'templates/tab-category.html',
          controller: 'CategoriesController'
        }
      }
    })

    .state('tab.category-detail', {
      url: '/category/:categoryId',
      views: {
        'tab-category': {
          templateUrl: 'templates/tab-item.html',
          controller: 'CategoryController'
        }
      }
    })

    .state('tab.category-detail-item-detail', {
      url: '/category/:categoryId/:itemId/:publicationId',
      views: {
        'tab-category': {
          templateUrl: 'templates/tab-item-detail.html',
          controller: 'CategoryController'
        }
      }
    })

  .state('tab.item', {
    url: '/item',
    views: {
      'tab-item': {
        templateUrl: 'templates/tab-item.html',
        controller: 'ItemsController'
      }
    }
  })

    .state('tab.item-detail', {
      url: '/item/:itemId/:publicationId',
      views: {
        'tab-item': {
          templateUrl: 'templates/tab-item-detail.html',
          controller: 'ItemController'
        }
      }
    })
    
    .state('tab.item-detail-store', {
      url: '/item/store/single/:storeId',
      views: {
        'tab-item': {
          templateUrl: 'templates/tab-store-detail.html',
          controller: 'StoreController'
        }
      }
    })

  .state('tab.store', {
    url: '/store',
    views: {
      'tab-store': {
        templateUrl: 'templates/tab-store.html',
        controller: 'StoresController'
      }
    }
  })

  .state('tab.store-detail', {
    url: '/store/:storeId',
    views: {
      'tab-store': {
        templateUrl: 'templates/tab-store-detail.html',
        controller: 'StoreController'
      }
    }
  })

    .state('tab.cart', {
      url: '/cart',
      views: {
        'tab-cart': {
          templateUrl: 'templates/tab-cart.html',
          controller: 'CartController'
        }
      }
    })

    .state('tab.cart-item', {
      url: '/cart/:itemId/:publicationId',
      views: {
        'tab-cart': {
          templateUrl: 'templates/tab-cart-item-detail.html',
          controller: 'ItemController'
        }
      }
    })
    .state('tab.cart-item-store', {
      url: '/cart/store/single/:storeId/:bannerCode',
      views: {
        'tab-cart': {
          templateUrl: 'templates/tab-store-detail.html',
          controller: 'StoreController'
        }
      }
    })
    .state('tab.cart-map', {
      url: '/cart/map',
      views: {
        'tab-cart': {
          templateUrl: 'templates/tab-map.html',
          controller: 'MapController'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/item');

});
