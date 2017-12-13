angular.module('myApp').controller('loginController',function($scope,$http) {
    $scope.msg='Login Page';

    $scope.login = function() {
        $scope.params = {
            "username" : $scope.username,
            "password" : $scope.password
        };
        console.log($scope.params);

        // Setting fields blank again
        $scope.username = "";
        $scope.password = "";
    }
});