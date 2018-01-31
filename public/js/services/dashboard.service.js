"use strict";

angular.module("myApp").factory("DashboardService", DashboardService);

DashboardService.$inject = ["ParticipantsService", "CollegeService", "IssueService"];

function DashboardService(ParticipantsService, CollegeService, IssueService) {
    let service = {}
    let response;
    
    service.GetCollegeList = GetCollegeList;
    service.AddParticipant = AddParticipant;
    service.GetParticipants = GetParticipants;
    service.GetTotalRegistrationCount = GetTotalRegistrationCount;
    service.GetInternalRegistrationCount = GetInternalRegistrationCount;
    service.GetExternalRegistrationCount = GetExternalRegistrationCount;
    service.IssueList = IssueList;
    service.AddIssue = AddIssue;
    service.ToggleIssueStatus =ToggleIssueStatus;
    
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

    function IssueList(callback) {
        IssueService.IssueList()
            .then(function(res) {
                response = {success: true, message: res};
                callback(response);
            }, function(res) {
                response = res;
                callback(response);
            });
    }

    function AddIssue(message, callback) {
        IssueService.AddIssue(message)
            .then(function(res) {
                response = {success: true, message: res};
                callback(response);
            }, function(res) {
                response = res;
                callback(response);
            });
    }

    function ToggleIssueStatus(id, done, callback) {
        IssueService.ToggleIssueStatus(id, done)
            .then(function(res) {
                response = {success: true, message: res};
                callback(response);
            }, function(res) {
                response = res;
                callback(response);
            });
    }
}