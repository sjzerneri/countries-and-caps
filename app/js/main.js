(function () {

    'use strict';


    angular.module('SampleApp', ['ngRoute', 'ngAnimate'])

    .config([
        '$locationProvider',
        '$routeProvider',
        function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            // routes
            $routeProvider
                .when("/", {
                    templateUrl: "./partials/welcome.html",
                    controller: "MainController"
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);

    //Load controller
    angular.module('SampleApp')

    .controller('MainController', [
        '$scope',
        function ($scope) {
            $scope.test = "Welcome to the Countries and Capitals App. I hope you have a lot of fun learning about this information. If you have any questions, we don't have a support team, so feel free to figure it out yourself :)";
        }
    ]);

}());
