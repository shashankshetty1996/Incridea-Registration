"use strict";

angular.module("myApp").factory("DashboardService", DashboardService);

DashboardService.$inject = ["ParticipantsService", "CollegeService"];

function DashboardService(ParticipantsService, CollegeService) {
    let service = {}
    let response;
    
    service.GetCollegeList = GetCollegeList;
    service.AddParticipant = AddParticipant;
    service.GetParticipants = GetParticipants;
    service.GetTotalRegistrationCount = GetTotalRegistrationCount;
    service.GetInternalRegistrationCount = GetInternalRegistrationCount;
    service.GetExternalRegistrationCount = GetExternalRegistrationCount;
    
    return service;

    function GetCollegeList(callback) {
        CollegeService.GetNames()
            .then(function(data){
                response = {success: true, message: data};
                callback(response); 
            });     
    }

    function AddParticipant(user, callback) {
        ParticipantsService.AddParticipant(user)
            .then(function(res) {
                response = {success: true, message: res};
                callback(response);
            }, function(res) {
                response = res;
                callback(response);
            });
    }

    function GetParticipants(callback) {
        ParticipantsService.GetParticipants()
            .then(function(res) {
                response = {success: true, message: res};
                callback(response);
            }, function(res) {
                response = res;
                callback(response);
            });
    }

    function GetTotalRegistrationCount(callback) {
        ParticipantsService.GetTotalRegistrationCount()
            .then(function(res) {
                response = {success: true, message: res};
                callback(response);
            }, function(res) {
                response = res;
                callback(response);
            });
    }

    function GetInternalRegistrationCount(callback) {
        ParticipantsService.GetInternalRegistrationCount()
            .then(function(res) {
                response = {success: true, message: res};
                callback(response);
            }, function(res) {
                response = res;
                callback(response);
            });
    }

    function GetExternalRegistrationCount(callback) {
        ParticipantsService.GetExternalRegistrationCount()
            .then(function(res) {
                response = {success: true, message: res};
                callback(response);
            }, function(res) {
                response = res;
                callback(response);
            });
    }
}