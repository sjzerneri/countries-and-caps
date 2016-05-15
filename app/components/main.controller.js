(function () {
    angular.module('cacApp')
        .controller('mainController', function ($scope, $location, geonames) {
            $scope.browseCountries =

                function (path) {
                    $location.path(path);
                };

            geonames.countries()
                .then(function (response) {
                    $scope.countries = response;
                })
        })
}());
