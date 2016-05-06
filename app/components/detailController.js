(function(){
angular.module('cacApp')
    .controller('detailController', function ($scope, $location, countrydetails, $routeParams, $q) {

        $scope.browseCountries =

            function (path) {
                $location.path(path);
            };

        var vm = this;

        vm.countryCode = $routeParams.countryCode;

        vm.country = {};

        $scope.code = $routeParams.countryCode;

        countrydetails.countryDetails(vm.countryCode)
            .then(function (response) {
                vm.country = response;
                return $q.all([
                    countrydetails.search(vm.country.capital),
                    countrydetails.neighbors(vm.country.geonameId)
                    ]);
            }).then(function (response) {
                vm.country.search = response[0];
                vm.country.neighbors = response[1].geonames;
                console.log(vm.country.neighbors);
            })

    });
}());
