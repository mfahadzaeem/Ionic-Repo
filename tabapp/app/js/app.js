// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
app.controller('ctrl', function ($scope) {
  $scope.goCats = false;

});
app.controller('MyCtrl', function ($scope) {
  $scope.group = [];
    $scope.group1 = [];
      $scope.group3 = [];
    $scope.group4 = [];
        $scope.group5 = [];
		    $scope.group6 = [];
        $scope.group7 = [];
		        $scope.group8 = [];
  $scope.toggleGroup = function (group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function (group) {
    return $scope.shownGroup === group;
  };

});



app.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.views.transition('none')
  // rest of the config
})


  .config(function ($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position("bottom");
  })





app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',

    })

    .state('feeds', {
      url: '/feeds',
      templateUrl: 'templates/feeds.html',

    })

    .state('calendar', {
      url: '/calendar',
      templateUrl: 'templates/calendar.html',

    })

    .state('notifications', {
      url: '/notifications',
      templateUrl: 'templates/notifications.html',

    })

    .state('contact', {
      url: '/contact',
      templateUrl: 'templates/contact.html',
      //   templateUrl: 'templates/acordion.html',

    })
    .state('acordion', {
      url: '/acordion',
      //templateUrl: 'templates/contact.html',
      templateUrl: 'templates/acordion.html',

    })

    .state('settings', {
      url: '/settings',
      templateUrl: 'templates/settings.html',
      controller: 'ctrl',

    })



  $urlRouterProvider.otherwise('/');


});



