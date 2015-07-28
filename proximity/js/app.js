// Ionic Proximity App

angular.module('proximity', ['ionic', 'proximity.controllers', 'proximity.services'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    $rootScope._ = window._;
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

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
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'LoginController'
  })

  .state('tab.users', {
    url: '/users',
    views: {
      'tab-users': {
        templateUrl: 'templates/tab-users.html',
        controller: 'UserController'
      }
    }
  })

  .state('tab.conversations', {
      url: '/conversations',
      views: {
        'tab-conversations': {
          templateUrl: 'templates/tab-conversations.html',
          controller: 'ConversationController'
        }
      }
    })
    
    .state('tab.conversation-detail', {
      url: '/conversations/:id',
      views: {
        'tab-conversations': {
          templateUrl: 'templates/conversation-detail.html',
          controller: 'ConversationDetailController'
        }
      }
    });

  $urlRouterProvider.otherwise('/tab/users');
});
