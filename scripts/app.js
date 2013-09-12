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
  })
  .directive('changeSelection', function ($location) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                element.bind('click', function (e) {
                    e.preventDefault();
                    $location.path(attr.changeSelection);
                    scope.$apply();
                });
            }
        }
    }
)
