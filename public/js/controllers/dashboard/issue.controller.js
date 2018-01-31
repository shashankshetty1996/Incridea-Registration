angular
    .module('myApp')
    .controller('dashboardIssueController', dashboardIssueController);

dashboardIssueController.$inject = ['$scope', 'DashboardService'];
function dashboardIssueController($scope, DashboardService) {
    $scope.msg = "if you have any issue, please fill it here";
}