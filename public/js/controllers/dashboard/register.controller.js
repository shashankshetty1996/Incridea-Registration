angular
    .module('myApp')
    .controller('dashboardRegisterController', dashboardRegisterController);

dashboardRegisterController.$inject = ['$scope', '$location'];
function dashboardRegisterController($scope, $location) {
    $scope.msg = 'Welcome from INCRIDEA';

    // Error message alert.
    $scope.errorMsg = "Field data invalid";
    $scope.errorStatus = false;

    $scope.register = function() {
        let name = $scope.name;
        let usn = $scope.usn;
        let email = $scope.email;
        let phone = $scope.phone;
        console.log(`Name is ${name} USN is ${usn} email is ${email} phone is ${phone}`);

        // Create a participant service which will deal with the return
        // demo error checker
        if(name !== 'Shashank') {
            $location.path('/dashboard');
        } else {
            $scope.errorStatusReset($scope.errorStatus);
        }
    }

    $scope.errorStatusReset = function(status) {
        $scope.errorStatus = !status;
    }
};