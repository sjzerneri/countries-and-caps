(function(){
angular.module('cacApp')
    .factory('geonames', function ($http) {
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

        return {
            countries: countries
        }
    })
}());