angular.module('cacApp')
    .controller('mainController', function ($scope, $location, geonames) {
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
    })
