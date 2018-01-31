angular
    .module('myApp')
    .controller('dashboardController', dashboardController);

dashboardController.$inject = ['$scope', 'DashboardService'];
function dashboardController($scope, DashboardService) {
    // $http.post('/users/test')
    // .then(function(response) {
    //     console.log(response.data);
    // });

    // Initialization of details display to true
    $scope.details = true;

    // changing the state of display
    $scope.detailsToggle = function() {
        $scope.details = !$scope.details;
    }

    // Participants Details
    DashboardService.GetParticipants(function(response) {
        // message
        $scope.recentMsg = 'Recently Added Participant';
        if(response.success) {
            $scope.participantsList = response.message;
        }
    });

    // All the college list
    DashboardService.GetCollegeList(function(response) {
        if(response.success) {
            $scope.collegeList = response.message;
        }
    });

    // Total Number of Registration
    DashboardService.GetTotalRegistrationCount(function(response) {
        if(response.success) {
            $scope.total_registration = response.message;
        }
    });

    // Total Number of Internal Registration
    DashboardService.GetInternalRegistrationCount(function(response) {
        if(response.success) {
            $scope.internal_registration = response.message;
        }
    });

    // Total Number of External Registration
    DashboardService.GetExternalRegistrationCount(function(response) {
        if(response.success) {
            $scope.external_registration = response.message;
        }
    });

    // based on college code college name will be returned 
    $scope.collegeName = function(code) {
        let i=0;
        while($scope.collegeList) {
            if($scope.collegeList[i].College_code === code) {            
                return $scope.collegeList[i].Name;
            } 
        }
    }
};