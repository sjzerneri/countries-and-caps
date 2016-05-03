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
            .when('/countries/:countryCode', {
                templateUrl: 'detail.html',
                controller: 'detailController'
            })
    })
