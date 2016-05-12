(function () {
    angular.module('cacApp')
        .controller('detailController', function ($scope, $location, $routeParams, $q, geonames) {

            var vm = this;

            vm.browseCountries =

                function (path) {
                    $location.path(path);
                };

            vm.countryCode = $routeParams.countryCode;

            vm.country = {};

            geonames.countryDetails(vm.countryCode)
                .then(function (response) {
                    vm.country = response;
                    return $q.all([
                    geonames.search(vm.country.capital),
                    geonames.neighbors(vm.country.geonameId)
                    ]);
                }).then(function (response) {
                    vm.country.search = response[0];
                    vm.country.neighbors = response[1].geonames;
                    console.log(vm.country.neighbors);
                })

        });
}());
