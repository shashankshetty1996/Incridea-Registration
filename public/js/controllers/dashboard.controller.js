angular
    .module('myApp')
    .controller('dashboardController', dashboardController);

dashboardController.$inject = ['$scope', 'CredentialsService'];
function dashboardController($scope, CredentialsService) {
    $scope.msg = "I'm in dashboard after login"

    console.log(CredentialsService.getLogin());
};