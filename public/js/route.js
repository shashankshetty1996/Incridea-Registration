var app = angular.module("myApp",['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'pages/home.ejs',
        controller : 'homeController'
    })
    .when('/about', {
        templateUrl : 'pages/about.ejs',
        controller : 'aboutController'
    })
    .when('/login', {
        templateUrl : 'pages/login.ejs',
        controller : 'loginController'
    })
    .otherwise({
        templateUrl : 'pages/home.ejs',
        controller : 'homeController'
    });
});