"use strict";

angular.module("myApp").factory("ParticipantsService", ParticipantsService);

ParticipantsService.$inject = ["$http"];

function ParticipantsService($http) {
    let service = {}
    service.GetParticipants = GetParticipants;
    service.AddParticipant = AddParticipant;

    return service

    function GetParticipants() {
        return $http.get('/api/').then(handleSuccess, handleError('Error getting all participant'));
    }

    function AddParticipant(data) {
        return $http.post('/api/', data).then(handleSuccess, handleError('Error inserting participant'));
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