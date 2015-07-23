'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('musicInventoryApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
                // place here mocked dependencies
        });
    }));

    it('should attach a list of songs to the scope', function () {
        expect(scope.songs.length).toBe(3);
    });
    it('add rock song should add a rock song to the scope', function () {
        scope.addSongRock();
        expect(scope.songs[scope.songs.length - 1].genre).toBe('rock');
    });
    it('add rap song should add a rock song to the scope', function () {
        scope.addSongRap();
        expect(scope.songs[scope.songs.length - 1].genre).toBe('rap');
    });
    it('add pop song should add a rock song to the scope', function () {
        scope.addSongPop();
        expect(scope.songs[scope.songs.length - 1].genre).toBe('pop');
    });
    it('delete button should delete song', function() {
        var temp = scope.songs[1];
        scope.removeSong(1);
        expect(scope.songs[1].name == temp.name).toBeFalsy();
    });
});