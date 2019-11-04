var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    console.log('myApp -- config');
    $routeProvider
      .when('/home', {
        templateUrl: '/views/templates/home.html',
        controller: 'HomeController as hc',
      })
      .when('/register', {
        templateUrl: '/views/templates/register.html',
        controller: 'LoginController as lc'
      })
      .otherwise({
        redirectTo: 'home'
      });
  });