angular
    .module('myApp')
    .controller('dashboardRegisterController', dashboardRegisterController);

dashboardRegisterController.$inject = ['$scope', '$location', 'DashboardService'];
function dashboardRegisterController($scope, $location, DashboardService) {
    // Error message alert.
    $scope.errorMsg = "Field data invalid";
    $scope.errorStatus = false;

    // college list
    DashboardService.GetCollegeList(function(result) {
        if(result.success) {
            $scope.collegeList = result.message;
        }
    });

    $scope.register = function() {
        let name = $scope.name;
        let usn = $scope.usn;
        let email = $scope.email;
        let phone = $scope.phone;
        let college = $scope.college.College_code;

        // if not a number
        if(isNaN(phone)) {
            $scope.errorStatusReset($scope.errorStatus);
            return 
        }

        // form data json object.
        let user = {name: name, usn: usn, email: email,phone: phone, college: college};

        // Adding participant to database
        DashboardService.AddParticipant(user, function(response) {
            if(response.success) {
                let successMsg = "participant pid is "+response.message;
                alert(`Registered ${successMsg}`);
                $location.path('/dashboard/');
            } else {
                $scope.errorMsg = response.message;
                $scope.errorStatusReset($scope.errorStatus);
            }
        });
    }

    // toggle alert with view
    $scope.errorStatusReset = function(status) {
        $scope.errorStatus = !status;
    }
};