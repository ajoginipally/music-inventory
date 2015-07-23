'use strict';

/**
 * @ngdoc filter
 * @name musicInventoryApp.filter:switchcase
 * @function
 * @description
 * # switchcase
 * Filter in the musicInventoryApp.
 */
angular.module('musicInventoryApp')
    .filter('switchcase', function () {
            return function (songs, genreFilter) {
                var tmp = [];
                angular.forEach(songs, function (value, key){
                    if(value.genre === genreFilter) {
                        tmp.push(value);
                    }
                    else if(genreFilter === null) {
                        tmp.push(value);
                    }
                });
                return tmp;
            };
        });