describe("mainController", function () {
    var _geonames, _location, _scope;

    beforeEach(module('cacApp'));
    beforeEach(inject(function ($controller, $injector, $httpBackend) {
        _geonames = $injector.get("geonames");
        _location = $injector.get("$location");
        _scope = $injector.get("$rootScope").$new();
        httpBackend = $httpBackend;
        spyOn(_location, "path");

        $controller('mainController', {
            $scope: _scope,
            $location: _location,
            geonames: _geonames
        })

    }))

    it('should define browseCountries scope', function () {
        expect(_scope.browseCountries).toBeDefined();
    })

    it("should call location.path with an argument", function () {
        _scope.browseCountries("foo");
        expect(_location.path).toHaveBeenCalledWith("foo");
    })

    it("should equal a length of 250", function () {
        var url = 'http://api.geonames.org/countryInfoJSON?username=steveyz';
        var httpResponse = [{}];
        httpBackend.expectGET(url).respond(200, httpResponse);
        expect(_scope.countries.length).toBe(250);
    })

})
