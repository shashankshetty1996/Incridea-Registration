angular
    .module('myApp')
    .controller('statController', statController);

statController.$inject = ['$scope'];
function statController($scope) {
    $scope.msg = "Stat of registration had to be displayed here but i didn't do it. sorry"
};