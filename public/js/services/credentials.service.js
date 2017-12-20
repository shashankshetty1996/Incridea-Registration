// angular.module('myApp').service('credentialsService', function () {
//     this.login = false;
//     this.admin = false;

//     this.toggleLogin = () => {
//         this.login = !this.login;
//         return this.login;
//     }

//     this.toggleAdmin = () => {
//         this.admin = !this.admin;
//         return this.admin;
//     }
// });

(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('CredentialsService', CredentialsService);

    CredentialsService.$inject = ['$cookies', '$rootScope'];
    function CredentialsService($cookies, $rootScope, UserService) {
        let service = {};
        let admin = false;
        let login = false;

        service.getLogin = getLogin;
        service.setLogin = setLogin;
        service.getAdmin = getAdmin;
        service.setAdmin = setAdmin;

        return service;

        function setAdmin(value) {
            $rootScope.globals = {
                currentUser: {
                    username : '',
                    authdata : ''
                }
            }; 
            admin = value;
        }

        function getAdmin() {
            if($rootScope.globals.currentUser) {
                admin = ($rootScope.globals.currentUser.username === 'admin') ? true : false;                         
            } else {
                admin = false;                                         
            }
            return admin;
        }

        function setLogin(value) {
            $rootScope.globals = {
                currentUser: {
                    username : '',
                    authdata : ''
                }
            };       
            login = value;                      
        }

        function getLogin() {
            if($rootScope.globals.currentUser) {
                login = ($rootScope.globals.currentUser.username !== 'admin') ? true : false;                         
            } else {
                login = false;                                         
            }
            return login;
        }
    }
})();