'use strict';
// var app = angular.module('myApp.controllers', []);

app.controller('MyCtrl2', MyCtrl2);
var MyCtrl2 = ['$scope', function($scope) {

    $scope.notifyServiceOnChage = function() {
        console.log($scope.windowHeight);
    };
}];