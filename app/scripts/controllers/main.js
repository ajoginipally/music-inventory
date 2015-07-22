'use strict';

/**
 * @ngdoc function
 * @name musicInventoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the musicInventoryApp
 */
angular.module('musicInventoryApp')
    .controller('MainCtrl', function ($scope) {
        $scope.songs = [
            {
                name: 'back in black',
                genre: 'rock'
            },
            {
                name: 'wide awake',
                genre: 'pop'
            },
            {
                name: 'money trees',
                genre: 'rap'
            }
    ];

        $scope.addSongRock = function () {
            $scope.song = {
                name: $scope.song,
                genre: "rock"
            }
            $scope.songs.push($scope.song);
            $scope.song = '';
        };

        $scope.addSongRap = function () {
            $scope.song = {
                name: $scope.song,
                genre: "rap"
            }
            $scope.songs.push($scope.song);
            $scope.song = '';
        };

        $scope.addSongPop = function () {
            $scope.song = {
                name: $scope.song,
                genre: "pop"
            }
            $scope.songs.push($scope.song);
            $scope.song = '';
        };
    });