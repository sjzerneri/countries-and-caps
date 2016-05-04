angular.module('cacApp')
    .controller('detailController', function ($scope, $location, countrydetails, $routeParams, $q) {

        $scope.browseCountries =

            function (path) {
                $location.path(path);
            };

        var countryCode = $routeParams.countryCode;

        $scope.code = $routeParams.countryCode;

        countrydetails.countryDetails(countryCode)
            .then(function (response) {
                $scope.country = response;
                return $q.all([
                    countrydetails.search($scope.country.capital),
                    countrydetails.neighbors($scope.country.geonameId)
                    ]);
            }).then(function (response) {
                $scope.search = response[0];
                $scope.neighbors = response[1].geonames;
            })

    });
