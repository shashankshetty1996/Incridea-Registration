angular.module('myApp').controller('loginController',function($scope,$http) {
    $scope.msg='Login Page';

    $scope.login = function() {
        $scope.params = {
            "username" : $scope.username,
            "password" : $scope.password
        };
        // console.log($scope.params);

        $http.post('/users/login', $scope.params)
            .then((response) => {
                // Success response
                if(response.data.length == 0) {
                    // user not found
                    alert('invalid username or password');
                } else {
                    // user found successfully
                    console.log(response.data[0].flag);
                    $scope.clearField();
                }
            }, (response) => {
                // Error response
                console.log(response.statusText);
            });

        // Setting fields blank again
        $scope.clearField = () => {
            $scope.username = "";
            $scope.password = "";
        }
    }
});