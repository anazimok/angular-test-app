'use strict';

angular.module('devApp', [])
  .value('$anchorScroll', angular.noop)
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/preferences', {
        templateUrl: 'views/preferences.html',
        controller: 'PreferencesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
