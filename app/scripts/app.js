'use strict';

/**
 * @ngdoc overview
 * @name infomofogithubioApp
 * @description
 * # infomofogithubioApp
 *
 * Main module of the application.
 */
angular
  .module('infomofogithubioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'slick',
    'ngLoading'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
