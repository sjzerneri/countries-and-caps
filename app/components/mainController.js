angular.module('cacApp')
    .controller('mainController', function ($scope, $location, geonames, countrydetails) {
        $scope.test = "Testing...";
        $scope.countriesTest = "Testing Countries....";
        $scope.browseCountries =

            function (path) {
                $location.path(path);
            };

        geonames.countries()
            .then(function (response) {
                $scope.countries = response;
                console.log($scope.countries);
            })

        countrydetails.getDetails()
            .then(function (response) {
                $scope.countryDetails = response;
                console.log($scope.countryDetails);
            })

    })
