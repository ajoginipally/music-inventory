'use strict';

describe('Filter: switchcase', function () {
    var songs;
    // load the filter's module
    beforeEach(module('musicInventoryApp'));

    // initialize a new instance of the filter before each test
    var switchcase;
    beforeEach(inject(function ($filter) {
        switchcase = $filter('switchcase');
        songs = [
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
    }));

    /*it('filter rock songs should show a list of rock songs', inject(function (switchcase) {
        var count = 0;

        angular.forEach(switchcase('rock'), function (key, value) {
            if (value.genre === 'rock') {
                count++;
            }
        });

        expect(count).toBe(switchcase('rock').length);
    }));*/

    it('filter rock songs should show a list of rock songs', function () {
        var rockItems = switchcase(songs, 'rock');
        expect(rockItems.length).toBe(1);
    });

    it('filter rap songs should show a list of rap songs', function () {
        var rapItems = switchcase(songs, 'rap');
        expect(rapItems.length).toBe(1);
    });

    it('filter pop songs should show a list of pop songs', function () {
        var popItems = switchcase(songs, 'pop');
        expect(popItems.length).toBe(1);
    });

    it('add another rock song to the list expect list to be two', function () {
        var rockItems = switchcase(songs, 'rock');
        expect(rockItems.length).toBe(1);
        songs.push({
            name: 'england',
            genre: 'rock'
        });
        rockItems = switchcase(songs, 'rock');
        expect(rockItems.length).toBe(2);

    });

});