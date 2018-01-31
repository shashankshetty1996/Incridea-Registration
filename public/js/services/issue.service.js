"use strict";

angular.module("myApp").factory("IssueService", IssueService);

IssueService.$inject = ["$http"];

function IssueService($http) {
    let service = {}
    service.IssueList = IssueList;
    service.AddIssue = AddIssue;
    service.ToggleIssueStatus = ToggleIssueStatus;

    return service

    function IssueList() {
        return $http.get('/api/issue/').then(handleSuccess, handleError('Error getting all issues'))
    }

    function AddIssue(message) {
        let data = {message: message};
        return $http.post('/api/issue/', data).then(handleSuccess, handleError('Error getting all users'));
    }

    function ToggleIssueStatus(id, done) {
        let data = {id: id,done: done};
        return $http.post('/api/issue/status/', data).then(handleSuccess, handleError('Error getting all users'));        
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