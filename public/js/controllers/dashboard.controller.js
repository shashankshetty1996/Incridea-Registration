angular
    .module('myApp')
    .controller('dashboardController', dashboardController);

dashboardController.$inject = ['$scope', 'CredentialsService', 'DashboardService'];
function dashboardController($scope, CredentialsService, DashboardService) {
    // console.log('Dashboard controller login status is '+CredentialsService.getLogin());
    // console.log('Dashboard controller admin status is '+CredentialsService.getAdmin());

    // $http.post('/users/test')
    // .then(function(response) {
    //     console.log(response.data);
    // });
    $scope.details = true;

    $scope.detailsToggle = function() {
        $scope.details = !$scope.details;
    }

    DashboardService.GetParticipants(function(response) {
        // message
        $scope.recentMsg = 'Recently Added Participant';
        if(response.success) {
            $scope.participantsList = response.message;
        }
    });

    DashboardService.GetCollegeList(function(response) {
        if(response.success) {
            $scope.collegeList = response.message;
        }
    });

    $scope.collegeName = function(code) {
        let i=0;
        while($scope.collegeList) {
            if($scope.collegeList[i].College_code === code) {            
                return $scope.collegeList[i].Name;
            } 
        }
    }
};