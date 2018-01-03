angular
    .module('myApp')
    .controller('dashboardRegisterController', dashboardRegisterController);

dashboardRegisterController.$inject = ['$scope'];
function dashboardRegisterController($scope) {
    $scope.msg = 'Welcome from INCRIDEA';

    $scope.register = function() {
        console.log('clicked on register');
    }
};