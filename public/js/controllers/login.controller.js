angular
.module('myApp')
.controller('loginController', loginController);

loginController.$inject = ['$scope', '$location', 'AuthenticationService'];
function loginController($scope, $location, AuthenticationService) {

    $scope.msg='Login Page';

    $scope.initController = () => {
        // reset login status
        AuthenticationService.ClearCredentials();
    };

    $scope.initController();

    $scope.login = () => {
        // $scope.params = {
        //     "username" : $scope.username,
        //     "password" : $scope.password
        // };
        // console.log($scope.params);

        // $http.post('/users/login', $scope.params)
        //     .then((response) => {
        //         // Success response
        //         if(response.data.length == 0) {
        //             // user not found
        //             alert('invalid username or password');
        //         } else {
        //             // user found successfully
        //             console.log(response.data[0].flag);
        //             $scope.clearField();
        //         }
        //     }, (response) => {
        //         // Error response
        //         console.log(response.statusText);
        //     });

        let username = $scope.username;
        let password = $scope.password;
        
        AuthenticationService.Login(username, password, function (response) {
            if (response.success) {
                AuthenticationService.SetCredentials(username, password);
                $scope.clearField();
                $location.path('/dashboard');
            } else {
                $scope.username = "Invalid Credentials";
                $scope.password = "Invalid Credentials";
            }
        });

        // Setting fields blank again
        $scope.clearField = () => {
            $scope.username = "";
            $scope.password = "";
        }
    }
};