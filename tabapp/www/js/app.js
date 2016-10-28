fahad
var app = angular.module('starter', ['ionic'])

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
  $ionicConfigProvider.views.transition('none');
  $ionicConfigProvider.tabs.position("bottom");

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


app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

