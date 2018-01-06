"use strict";

angular.module("myApp").factory("CollegeService", CollegeService);

CollegeService.$inject = ["$http"];

function CollegeService($http) {
    let service = {}
    service.GetNames = GetNames;

    return service

    function GetNames() {
        return $http.get('/api/college/').then(handleSuccess, handleError('Error getting all users'));
    }

    // private functions

    function handleSuccess(res) {
        return res.data;
    }

    function handleError(error) {
        return function () {
            return { success: false, message: error };
        };
    }
}