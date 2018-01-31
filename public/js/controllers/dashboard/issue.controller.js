angular
    .module('myApp')
    .controller('dashboardIssueController', dashboardIssueController);

dashboardIssueController.$inject = ['$scope', 'DashboardService'];
function dashboardIssueController($scope, DashboardService) {
    $scope.msg = "if you have any issue, please fill it here";

    $scope.issueList = [];

    DashboardService.IssueList(function(response) {
        if(response.success) {
            $scope.issueList = response.message;
        }
    }); 

    $scope.toggleStatus = function(issue) {
        let id = issue.id;
        let done = issue.done;

        DashboardService.ToggleIssueStatus(id, done, function(response) {
            if(response.success) {
                $scope.issueList = response.message;
            }
        });
    }

    $scope.issueSubmit = function() {
        let message = $scope.message;

        DashboardService.AddIssue(message, function(response) {
            if(response.success) {
                $scope.issueList = response.message;
                $scope.message = "";
            }
        });
    }    
}