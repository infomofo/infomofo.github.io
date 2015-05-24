'use strict';

/**
 * @ngdoc function
 * @name infomofogithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the infomofogithubioApp
 */
angular.module('infomofogithubioApp')
  .controller('MainCtrl', function ($scope, $timeout, Interceptor) {

    //trigger the loading screen to start
    Interceptor.start();

    // Give the images time, 4 seconds, to render
    $timeout(Interceptor.end, 4000)

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

    $scope.pants = [
      'images/pants1.jpg',
      'images/pants2.jpg',
      'images/pants3.jpg',
      'images/pants4.jpg',
      'images/pants5.jpg',
      'images/pants6.jpg',
      'images/pants7.jpg'
    ];

    $scope.shoes = [
      'images/shoes1.jpg',
      'images/shoes2.jpg',
      'images/shoes3.jpg',
      'images/shoes4.jpg',
      'images/shoes5.jpg',
      'images/shoes6.jpg',
      'images/shoes7.jpg',
      'images/shoes8.jpg'
    ];

    $scope.dataModel = {
      shuffleIcon: 'shuffle',
      selectedShirt: 0,
      selectedHead: 0,
      selectedPants: 0,
      selectedShoes: 0
    };

    var randomIndex = function(length) {
      var random = Math.random();
      var mult = random * length;
      return Math.floor(mult);
    };

    $scope.selectShirt = function(index) {
      $scope.dataModel.selectedShirt = index;
    };

    $scope.selectHead = function(index) {
      $scope.dataModel.selectedHead = index;
    };

    $scope.selectPants = function(index) {
      $scope.dataModel.selectedPants = index;
    };

    $scope.selectShoes = function(index) {
      $scope.dataModel.selectedShoes = index;
    };

    $scope.shuffle = function() {
      $scope.dataModel.shuffleIcon = 'autorenew';
      $scope.dataModel.selectedShirt = randomIndex($scope.shirts.length);
      $scope.dataModel.selectedHead = randomIndex($scope.heads.length);
      $scope.dataModel.selectedPants = randomIndex($scope.pants.length);
      $scope.dataModel.selectedShoes = randomIndex($scope.shoes.length);
      $timeout(function() {
        $scope.dataModel.shuffleIcon = 'shuffle';
      }, 250);
    };

    $timeout(function() {
      $scope.shuffle();
    }, 100);
  });
