angular.module('myApp').controller('aboutController',function($scope,$http) {
    $scope.msg='We are the incridea fest registration workshop';
    $scope.developer = [
        {"name":"Shashank S Shetty", "mob":"9481752839", "link":"https://github.com/shashankshetty1996/", "photo" : "img/img_avatar1.png"},
        {"name":"Shashank S Shetty", "mob":"9481752839", "link":"https://github.com/shashankshetty1996/", "photo" : "img/img_avatar1.png"}
    ];
});