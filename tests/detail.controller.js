describe("detailController", function () {
    beforeEach(module('cacApp'));

    beforeEach(inject(function ($controller, $injector) {
        _geonames = $injector.get("geonames");
        _location = $injector.get("$location");
        _scope = $injector.get("$rootScope").$new();
        _routeParams = $injector.get("$routeParams");
        _q = $injector.get("$q");
        $controller('detailController', {
            $scope: _scope,
            $location: _location,
            geonames: _geonames,
            $q: _q,
            $routeParams: _routeParams,
        })
    }))

    it('should set code equal to the routeParams country code', function () {
        expect(_scope.code).toEqual(_routeParams.countryCode);
    })
})
