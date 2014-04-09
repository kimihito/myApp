// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // the pet tab has its own child nav-view and history
    .state('tab.pet-index', {
      url: '/pets',
      views: {
        'pets-tab': {
          templateUrl: 'templates/pet-index.html',
          controller: 'VideoIndexCtrl'
        }
      }
    })

    .state('tab.pet-detail', {
      url: '/pet/:petId',
      views: {
        'pets-tab': {
          templateUrl: 'templates/pet-detail.html',
          controller: 'VideoDetailCtrl'
        }
      }
    })

    .state('tab.youtube',{
      url: '/youtube',
      views: {
        'youtube-tab': {
          templateUrl: 'templates/youtube.html',
          controller: 'VideoYoutubeCtrl'

        }
      }
    })

    .state('tab.youtube-detail', {
      url: '/youtube/:petId',
      views: {
        'youtube-tab': {
          templateUrl: 'templates/youtube-detail.html',
          controller: 'VideoDetailCtrl'
        }
      }
    })

    .state('tab.vimeo',{
      url: '/vimeo',
      views: {
        'vimeo-tab': {
          templateUrl: 'templates/vimeo.html',
          controller: 'VideoVimeoCtrl'

        }
      }
    })

    .state('tab.vimeo-detail', {
      url: '/vimeo/:petId',
      views: {
        'vimeo-tab': {
          templateUrl: 'templates/vimeo-detail.html',
          controller: 'VideoDetailCtrl'
        }
      }
    })

    .state('tab.fc2',{
      url: '/fc2',
      views: {
        'fc2-tab': {
          templateUrl: 'templates/fc2.html',
          controller: 'VideoFC2Ctrl'

        }
      }
    })

    .state('tab.fc2-detail',{
      url: '/fc2/:petId',
      views: {
        'fc2-tab': {
          templateUrl: 'templates/fc2.html',
          controller: 'VideoDetailCtrl'
        }
      }
    })

    .state('tab.niconico',{
      url: '/niconico',
      views: {
        'niconico-tab': {
          templateUrl: 'templates/niconico.html',
          controller: 'VideoNiconicoCtrl'

        }
      }
    })

    .state('tab.nicnico-detail',{
      url: '/niconico/:petId',
      views: {
        'niconico-tab':{
          templateUrl: 'templates/niconico-detail.html',
          controller: 'VideoDetailCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/pets');

});

