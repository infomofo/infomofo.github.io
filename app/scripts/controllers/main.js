'use strict';

/**
 * @ngdoc function
 * @name infomofogithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the infomofogithubioApp
 */
angular.module('infomofogithubioApp')
  .controller('MainCtrl', function ($scope, $timeout) {

    $scope.dataModel = {
      shuffleIcon: 'shuffle'
    };

    $scope.shuffle = function() {
      $scope.dataModel.shuffleIcon = 'autorenew';
      $timeout(function() {
        $scope.dataModel.shuffleIcon = 'shuffle';
      }, 750);
    };
  });
