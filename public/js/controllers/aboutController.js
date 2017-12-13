angular.module('myApp').controller('aboutController',function($scope,$http) {
    $scope.team = [
        {
            "name":"Shashank S Shetty", 
            "mob":"9481752839", 
            "link":"https://github.com/shashankshetty1996/", 
            "photo" : "img/img_avatar1.png", 
            "type" : "developer"
        },
        {
            "name":"Shashank S Shetty", 
            "mob":"9481752839", 
            "link":"https://www.facebook.com/shashankshetty1996", 
            "photo" : "img/img_avatar1.png", 
            "type" : "core"
        }
    ];
});