angular
.module('myApp')
.controller('homeController', homeController);

homeController.$inject = ['$scope', '$rootScope', 'CredentialsService', 'AuthenticationService'];
function homeController($scope, $rootScope, CredentialsService, AuthenticationService) {
    $scope.msg='Welcome from INCRIDEA';

    // $scope.login = credentialsService.login;
    // $scope.admin = credentialsService.admin;

    // $scope.changeAdmin = () => {
    //     $scope.admin = credentialsService.toggleAdmin();        
    // }  
    
    // $scope.changeLogin = () => {
    //     $scope.admin = credentialsService.toggleLogin();        
    // }  

    $scope.initController = () => {
        // reset login status
        AuthenticationService.ClearCredentials();
        CredentialsService.setLogin(false);
    };

    $scope.initController();

    console.log(CredentialsService.getLogin());
};