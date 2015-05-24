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
    'ngMdIcons',
    'ngLoading'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
