angular.module('myApp').controller('homeController',function($scope, $http, credentialsService) {
    $scope.msg='Welcome from INCRIDEA';

    $scope.login = credentialsService.login;
    $scope.admin = credentialsService.admin;

    $scope.changeAdmin = () => {
        $scope.admin = credentialsService.toggleAdmin();        
    }  
    
    $scope.changeLogin = () => {
        $scope.admin = credentialsService.toggleLogin();        
    }  
});