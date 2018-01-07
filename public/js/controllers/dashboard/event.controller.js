angular
    .module('myApp')
    .controller('dashboardEventController', dashboardEventController);

dashboardEventController.$inject = ['$scope', '$location', 'ParticipantsService', 'CollegeService'];
function dashboardEventController($scope, $location, ParticipantsService, CollegeService) {

}