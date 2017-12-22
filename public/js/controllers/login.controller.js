angular
    .module('myApp')
    .controller('loginController', loginController);

loginController.$inject = ['$scope', '$location', 'AuthenticationService'];
function loginController($scope, $location, AuthenticationService) {

    $scope.msg = 'Login Page';
    $scope.errorStatus = false;

    $scope.initController = () => {
        // reset login status
        AuthenticationService.ClearCredentials();
    };

    $scope.initController();

    $scope.login = () => {
        let username = $scope.username;
        let password = $scope.password;

        AuthenticationService.Login(username, password, function (response) {
            if (response.success) {
                // AuthenticationService.SetCredentials(username, password);
                $scope.clearField();
                $location.path('/dashboard');
            } else {
                $scope.errorMsg = response.message;
                $scope.errorStatus = true;
            }
        });

        // Setting fields blank again
        $scope.clearField = () => {
            $scope.username = "";
            $scope.password = "";
        }

        $scope.errorStatusReset = () => {
            $scope.errorStatus = false;
        }
    }
};