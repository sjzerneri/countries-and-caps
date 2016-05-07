(function () {
    angular.module('cacApp')
        .factory('geonames', function ($http, $q) {
            function countries() {
                return $http.get('http://api.geonames.org/countryInfoJSON?username=steveyz', {
                        cache: true
                    })
                    .then(function (response) {

                        return response.data.geonames;

                    }, function (response) {
                        console.log('Geo Response Failed');
                    });
            }

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

            function search(query) {
                var config = {
                    params: {
                        username: username,
                        q: query
                    }
                };

                return $http.get(baseUrl + '/searchJSON', config)
                    .then(function (res) {
                        return $q.when(res.data.geonames[0]);
                    });
            }

            function neighbors(geonameId) {
                var config = {
                    params: {
                        username: username,
                        geonameId: geonameId

                    }
                };

                return $http.get(baseUrl + '/neighboursJSON?', config)
                    .then(function (res) {
                        return $q.when(res.data);
                    });
            }

            return {
                countries: countries,
                countryDetails: countryDetails,
                search: search,
                neighbors: neighbors
            }
        })
}());
