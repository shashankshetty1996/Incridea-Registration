var app = angular.module("myApp", ['ngRoute', 'ngCookies']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.ejs',
            controller: 'homeController'
        })
        .when('/about', {
            templateUrl: 'pages/about.ejs',
            controller: 'aboutController'
        })
        .when('/login', {
            templateUrl: 'pages/login.ejs',
            controller: 'loginController'
        })
        .when('/dashboard', {
            templateUrl: 'pages/dashboard.ejs',
            controller: 'dashboardController'
        })
        .when('/stat', {
            templateUrl: 'pages/stat.ejs',
            controller: 'statController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.run(function ($rootScope, $location, $cookies, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookies.getObject('globals') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = $.inArray($location.path(), ['/login', '/', '/about']) === -1;
        var loggedIn = $rootScope.globals.currentUser;
        
        // set default redirect to home if not logged in
        if (restrictedPage && !loggedIn) {
            $location.path('/');
        }

        // set default redirect to dashboard if logged in        
        if (restrictedPage && loggedIn) {
            $location.path('/dashboard');
        }
    });
});