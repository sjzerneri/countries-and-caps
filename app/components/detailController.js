angular.module('cacApp')
    .controller('detailController', function ($scope, $location, countrydetails, $routeParams, $q) {

        $scope.browseCountries =

            function (path) {
                $location.path(path);
            };

        var vm = this;
        vm.countryCode = $routeParams.countryCode;
        vm.country = {};
        countrydetails.countryDetails(vm.countryCode)
            .then(function (response) {
                vm.country = response;
                console.log(vm.country);
                console.log(vm.country.countryName);
            });
    });
