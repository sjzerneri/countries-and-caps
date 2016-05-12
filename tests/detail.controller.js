describe("detailController", function () {
    beforeEach(module('cacApp'));

    beforeEach(inject(function ($controller, $injector) {
        _geonames = $injector.get("geonames");
        _location = $injector.get("$location");
        _scope = $injector.get("$rootScope").$new();
        _routeParams = $injector.get("$routeParams");
        _q = $injector.get("$q");

        var vm;
        vm.$controller('detailController', {
            $scope: _scope,
            $location: _location,
            geonames: _geonames,
            $q: _q,
            $routeParams: _routeParams,
        })
    }))


    //what if geonames.countries resolves, or what if it rejects
    // should contry details be passed a parameter.
})
