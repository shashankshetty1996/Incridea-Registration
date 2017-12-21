angular
    .module('myApp')
    .controller('dashboardController', dashboardController);

dashboardController.$inject = ['$scope', 'CredentialsService'];
function dashboardController($scope, CredentialsService) {
    $scope.msg = "I'm in dashboard after login"

    // console.log('Dashboard controller login status is '+CredentialsService.getLogin());
    // console.log('Dashboard controller admin status is '+CredentialsService.getAdmin());
};