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
      'images/head6.jpg',
      'images/head7.png',
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
      'images/shirt10.jpg',
      'images/shirt11.png',
    ];

    $scope.pants = [
      'images/pants1.jpg',
      'images/pants2.jpg',
      'images/pants3.jpg',
      'images/pants4.jpg',
      'images/pants5.jpg',
      'images/pants6.jpg',
      'images/pants7.jpg',
      'images/pants8.png',
    ];

    $scope.shoes = [
      'images/shoes1.jpg',
      'images/shoes2.jpg',
      'images/shoes3.jpg',
      'images/shoes4.jpg',
      'images/shoes5.jpg',
      'images/shoes6.jpg',
      'images/shoes7.jpg',
      'images/shoes8.jpg',
      'images/shoes9.png',
    ];

    $scope.dataModel = {
      shuffling: false,
      selectedShirt: -1,
      selectedHead: -1,
      selectedPants: -1,
      selectedShoes: -1,
      selectedProject: -1,
      selectedNetwork: -1
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
      $scope.dataModel.shuffling = true;
      $scope.dataModel.selectedShirt = randomIndex($scope.shirts.length);
      $scope.dataModel.selectedHead = randomIndex($scope.heads.length);
      $scope.dataModel.selectedPants = randomIndex($scope.pants.length);
      $scope.dataModel.selectedShoes = randomIndex($scope.shoes.length);
      $scope.dataModel.selectedProject = randomIndex(7);
      $scope.dataModel.selectedNetwork = randomIndex(9);
      $timeout(function() {
        $scope.dataModel.shuffling = false;
      }, 400);
    };

    $timeout(function() {
      $scope.shuffle();
    }, 200);
  });
