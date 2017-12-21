(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('CredentialsService', CredentialsService);

    CredentialsService.$inject = ['$rootScope'];
    function CredentialsService($rootScope) {
        let service = {};
        let admin = false;
        let login = false;

        service.getLogin = getLogin;
        service.getAdmin = getAdmin;

        return service;

        function getAdmin() {
            if ($rootScope.globals.currentUser) {
                admin = ($rootScope.globals.currentUser.username === 'admin') ? true : false;
            } else {
                admin = false;
            }
            return admin;
        }

        function getLogin() {
            if ($rootScope.globals.currentUser) {
                login = ($rootScope.globals.currentUser.username !== 'admin') ? true : false;
            } else {
                login = false;
            }
            return login;
        }
    }
})();