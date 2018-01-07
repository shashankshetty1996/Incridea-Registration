angular
.module('myApp')
.controller('aboutController',aboutController);

aboutController.$inject = ['$scope'];
function aboutController($scope) {
    $scope.team = [
        {
            "name":"Shashank S Shetty", 
            "mob":"9481752839", 
            "link":"https://github.com/shashankshetty1996/", 
            "photo" : "img/img_avatar1.png", 
            "type" : "developer"
        },
        {
            "name":"Vaibhav D'souza", 
            "mob":"9740840260", 
            "link":"https://www.facebook.com/vaibhavdsouza", 
            "photo" : "img/img_avatar1.png", 
            "type" : "core"
        }
    ];
};