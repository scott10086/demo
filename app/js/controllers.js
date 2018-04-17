'use strict';
// var app = angular.module('myApp.controllers', []);

app.controller('MyCtrl1', MyCtrl1);
var MyCtrl1 = ['$scope', function($scope) {

    $scope.notifyServiceOnChage = function() {
        console.log($scope.windowHeight);
    };
    $scope.helloW = "This is the partial for view 1.";
}];


app.controller('MyCtrl2', MyCtrl2);
var MyCtrl2 = ['$scope', function($scope) {

    $scope.notifyServiceOnChage = function() {
        console.log($scope.windowHeight);
    };
}];