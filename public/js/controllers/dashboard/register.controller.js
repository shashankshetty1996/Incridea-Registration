angular
    .module('myApp')
    .controller('dashboardRegisterController', dashboardRegisterController);

dashboardRegisterController.$inject = ['$scope', '$location', 'ParticipantsService', 'CollegeService'];
function dashboardRegisterController($scope, $location, ParticipantsService, CollegeService) {
    $scope.msg = 'Welcome from INCRIDEA';

    // Error message alert.
    $scope.errorMsg = "Field data invalid";
    $scope.errorStatus = false;

    // college list
    CollegeService.GetNames()
    .then(function(res) {
        console.log(res);
        $scope.collegeList = res;
    }, function(res) {
        console.log('something went wrong');
    });
    
    // Create a participant service which will deal with the return
    ParticipantsService.GetParticipants()
        .then( function(user) {
            console.log(user);
        }, function(error) {
            console.log(`something went wrong ${error}`);
        });

    $scope.register = function() {
        let name = $scope.name;
        let usn = $scope.usn;
        let email = $scope.email;
        let phone = $scope.phone;
        let college = $scope.college.College_code;

        let data = {name: name, usn: usn, email: email,phone: phone, college: college};
        console.log(data);

        // demo error checker
        // if(name !== 'Shashank') {
        //     $location.path('/dashboard');
        // } else {
        //     $scope.errorStatusReset($scope.errorStatus);
        // }

        ParticipantsService.AddParticipant(data)
        .then(function(res) {
            $scope.errorMsg = "Participants pid is "+res;
            console.log(res);
            $scope.errorStatusReset($scope.errorStatus);
        }, function(res) {
            $scope.errorMsg = res.message;
            $scope.errorStatusReset($scope.errorStatus);
        });
    }

    // toggle alert with view
    $scope.errorStatusReset = function(status) {
        $scope.errorStatus = !status;
    }
};