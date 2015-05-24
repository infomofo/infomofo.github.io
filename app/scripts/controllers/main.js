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

    $scope.heads = [
      '/images/head1.jpg',
      'images/head2.jpg',
      'images/head3.jpg',
      'images/head4.jpg',
      'images/head5.jpg',
      'images/head6.jpg'
    ];

    $scope.shirts = [
      'images/shirt1.jpg',
      'images/shirt2.jpg',
      'images/shirt3.jpg',
      'images/shirt4.jpg',
      'images/shirt5.jpg',
      'images/shirt6.jpg',
      'images/shirt7.jpg',
      'images/shirt8.jpg',
      'images/shirt9.jpg',
      'images/shirt10.jpg'
    ];

    $scope.dataModel = {
      shuffleIcon: 'shuffle',
      selectedShirt: 0,
      selectedHead: 0
    };

    var randomIndex = function(length) {
      var random = Math.random();
      var mult = random * length;
      return Math.floor(mult);
    };

    $scope.selectShirt = function(index) {
      $scope.dataModel.selectedShirt = index;
    };

    $scope.shuffle = function() {
      $scope.dataModel.shuffleIcon = 'autorenew';
      $scope.dataModel.selectedShirt = randomIndex($scope.shirts.length);
      $scope.dataModel.selectedHead = randomIndex($scope.heads.length);
      $timeout(function() {
        $scope.dataModel.shuffleIcon = 'shuffle';
      }, 250);
    };

    $timeout(function() {
      $scope.shuffle();
    }, 100);
  });
