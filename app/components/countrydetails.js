angular.module('cacApp')
    .factory('countrydetails', function ($http, $routeParams) {
        function getDetails(countryCode) {

            return $http.get('http://api.geonames.org/countryInfoJSON?username=steveyz&country=US')
                .then(function (response) {

                    return response.data.geonames;


                }, function (response) {
                    console.log('Detail Response Failed');
                });
        }
        return {
            getDetails: getDetails
        }

    })
