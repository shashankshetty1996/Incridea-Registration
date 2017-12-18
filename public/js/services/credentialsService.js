angular.module('myApp').service('credentialsService', function() {
    this.login = false;
    this.admin = false;
    
    this.toggleLogin = () => {
        this.login = !this.login;
        return this.login;
    }

    this.toggleAdmin = () => {
        this.admin = !this.admin;
        return this.admin;
    }
});