angular
    .module('myApp')
    .controller('rootController', rootController);

rootController.$inject = ['$scope', '$interval', 'CredentialsService', 'AuthenticationService'];
function rootController($scope, $interval, CredentialsService, AuthenticationService) {
    // console.log("I'm in root controller with login scope as " + CredentialsService.getLogin());
    // console.log("I'm in root controller with admin scope as " + CredentialsService.getAdmin());

    $scope.logout = () => {
        // reset login status
        AuthenticationService.ClearCredentials();
    };

    // $scope.initController();

    $scope.login = false;
    $scope.admin = false;

    // Checking for change in the credentials every 1sec
    $interval(function () {
        $scope.login = CredentialsService.getLogin();
        $scope.admin = CredentialsService.getAdmin();
    }, 1000);
};