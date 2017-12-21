angular
    .module('myApp')
    .controller('homeController', homeController);

homeController.$inject = ['$scope', '$rootScope', 'CredentialsService', 'AuthenticationService'];
function homeController($scope, $rootScope, CredentialsService, AuthenticationService) {
    $scope.msg = 'Welcome from INCRIDEA';

    // $scope.login = credentialsService.login;
    // $scope.admin = credentialsService.admin;

    // $scope.changeAdmin = () => {
    //     $scope.admin = credentialsService.toggleAdmin();        
    // }  

    // $scope.changeLogin = () => {
    //     $scope.admin = credentialsService.toggleLogin();        
    // }  

    // console.log('home controller login status is ' + CredentialsService.getLogin());
    // console.log('home controller admin status is ' + CredentialsService.getAdmin());
};