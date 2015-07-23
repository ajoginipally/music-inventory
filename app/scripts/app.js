'use strict';

/**
 * @ngdoc overview
 * @name musicInventoryApp
 * @description
 * # musicInventoryApp
 *
 * Main module of the application.
 */
angular
  .module('musicInventoryApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
