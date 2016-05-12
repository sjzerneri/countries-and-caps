describe("mainController", function () {
    var _geonames, _location, _scope;

    beforeEach(module('cacApp'));
    beforeEach(inject(function ($controller, $injector) {
        _geonames = $injector.get("geonames");
        _location = $injector.get("$location");
        _scope = $injector.get("$rootScope").$new();
        $controller('mainController', {
            $scope: _scope,
            $location: _location,
            geonames: _geonames
        })
    }))

    it('dosomething', function () {
        expect(true).toBe(true);
    })
})
