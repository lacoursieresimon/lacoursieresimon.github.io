// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html",
    controller: 'AppCtrl'
  })
  
  .state('tab.sources', {
    url: '/sources',
    views: {
      'tab-sources': {
        templateUrl: 'templates/tab-sources.html',
        controller: 'SourcesCtrl'
      }
    }
  })
  
  .state('tab.source-detail', {
    url: '/sources/:ID',
    views: {
      'tab-sources': {
        templateUrl: 'templates/source-detail.html',
        controller: 'SourceDetailCtrl'
      }
    }
  })
  
  	.state('tab.users', {
    url: '/users',
    views: {
      'tab-users': {
        templateUrl: 'templates/tab-users.html',
        controller: 'UsersCtrl'
      }
    }
  })
  
  .state('tab.nodes', {
      url: '/nodes',
      views: {
        'tab-nodes': {
          templateUrl: 'templates/tab-nodes.html',
          controller: 'NodesCtrl'
        }
      }
    })
    
    .state('tab.node-detail', {
      url: '/nodes/:ID',
      views: {
        'tab-node-detail': {
          templateUrl: 'templates/node-detail.html',
          controller: 'NodeDetailCtrl'
        }
      }
    })

  .state('tab.servers', {
    url: '/servers',
    views: {
      'tab-servers': {
        templateUrl: 'templates/tab-servers.html',
        controller: 'ServersCtrl'
      }
    }
  })
  
  .state('tab.server-detail', {
    url: '/servers/:ID',
    views: {
      'tab-servers': {
        templateUrl: 'templates/server-detail.html',
        controller: 'ServerDetailCtrl'
      }
    }
  })
  
  .state('tab.results', {
    url: '/results',
    views: {
      'tab-results': {
        templateUrl: 'templates/tab-results.html',
        controller: 'ResultsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/sources');

});
