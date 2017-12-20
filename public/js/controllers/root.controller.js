angular
    .module('myApp')
    .controller('rootController', rootController);

rootController.$inject = ['$scope', 'CredentialsService'];
function rootController($scope, CredentialsService) {
    console.log("I'm in root controller with login scope as " + CredentialsService.getLogin());
};