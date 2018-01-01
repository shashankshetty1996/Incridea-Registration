angular
    .module('myApp')
    .controller('dashboardController', dashboardController);

dashboardController.$inject = ['$scope', 'CredentialsService', '$http'];
function dashboardController($scope, CredentialsService, $http) {
    $scope.msg = "I'm in dashboard after login"

    // console.log('Dashboard controller login status is '+CredentialsService.getLogin());
    // console.log('Dashboard controller admin status is '+CredentialsService.getAdmin());

    $http.post('/users/test')
    .then(function(response) {
        console.log(response.data);
    });
};