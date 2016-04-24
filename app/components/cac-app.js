angular.module('cacApp', ['ngRoute', 'ngAnimate'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'index.html',
            controller: 'mainController'
        })
    })
    .controller('mainController', function ($rootScope, $scope) {
        $scope.test = "Testing...";
    })
