angular.module('cacApp')
    .controller('detailController', function ($scope, $location, countrydetails, $routeParams, $q) {

        $scope.browseCountries =

            function (path) {
                $location.path(path);
            };

        var countryCode = $routeParams.countryCode;

        countrydetails.countryDetails(countryCode)
            .then(function (response) {
                $scope.country = response;
                return $q.all([
                    countrydetails.search($scope.country.capital)
                    ]);
            }).then(function (response) {
                $scope.capitalAndNeighbors = response[0];
                console.log($scope.capitalAndNeighbors);
            })


    });
