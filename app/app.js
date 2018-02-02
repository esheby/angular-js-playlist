var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController', ['$scope', function($scope){

    $scope.ninjas = [
        {
            name: "Yoshi",
            belt: "Green",
            rate: 50
        },
        {
            name: "Ryu",
            belt: "yellow",
            rate: 30
        },
        {
            name: "Narto",
            belt: "orange",
            rate: 10
        },
        {
            name: "Saskeh",
            belt: "black",
            rate: 100
        }
    ];

}]);