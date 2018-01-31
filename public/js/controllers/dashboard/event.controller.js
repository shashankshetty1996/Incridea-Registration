angular
    .module('myApp')
    .controller('dashboardEventController', dashboardEventController);

dashboardEventController.$inject = ['$scope', 'DashboardService'];
function dashboardEventController($scope, DashboardService) {
    DashboardService.GetCollegeList(function(response) {
        if(response.success) {
            $scope.collegeList = response.message;
        }
    });
}