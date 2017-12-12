angular.module('myApp').controller('loginController',function($scope,$http) {
    $scope.msg='Login Page';

    $scope.login = function() {
        let params = {
            "username" : $scope.username,
            "password" : $scope.password
        };

        $scope.username = "";
        $scope.password = "";
    }
});