angular.module('cacApp')
    .factory('countrydetails', function ($http, $routeParams, $q) {

        var baseUrl = 'http://api.geonames.org';
        var username = 'steveyz';

        function countryDetails(countryCode) {
            var config = {
                params: {
                    username: username,
                    country: countryCode
                }
            };

            return $http.get(baseUrl + '/countryInfoJSON', config)
                .then(function (res) {
                    return $q.when(res.data.geonames[0]);
                });
        }
        return {
            countryDetails: countryDetails
        }
    });
