angular.module('cacApp', ['ngRoute', 'ngAnimate'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
                templateUrl: 'welcome.html',
                controller: 'mainController'
            })
            .when('/countries', {
                templateUrl: 'countries.html',
                controller: 'mainController'
            })
    })
    .controller('mainController', function ($rootScope, $scope, $location, $http, MyCache) {
        $scope.test = "Testing...";
        $scope.countriesTest = "Testing Countries....";
        $scope.browseCountries =

            function (path) {
                $location.path(path);
            };

        $http.get('http://api.geonames.org/countryInfoJSON?username=steveyz', {
                cache: MyCache
            })
            .then(function (response) {

                //console.log(response.data);
                //console.log(response.data.geonames);
                $scope.countries = response.data.geonames;
                console.log($scope.countries);


            }, function (response) {
                console.log('Geo Response Failed');
            });


    })
    .factory('MyCache', function ($cacheFactory) {
        return $cacheFactory('myCache');
    });
