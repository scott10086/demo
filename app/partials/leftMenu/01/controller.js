'use strict';
// var app = angular.module('myApp.controllers', []);

app.controller('LeftMenuCtrl', ['$scope','$location', function($scope,$location) {
	var url = $location.path();
	console.log(url);
	if(url.indexOf('menu01')!= -1){
    	$scope.items = [{
    		label:'010011111_111111',
    		url:'menu01',
            class:'active'
    	},{
            label:'010011111_222222',
            url:'menu01_item02',
            class:''
        },{
    		label:'010011111_333333',
    		url:'menu01_item03',
            class:''
    	}];
	}
	if(url.indexOf('menu02')!= -1){
    	$scope.items = [{
    		label:'010022222_111111',
    		url:'menu02',
            class:''
    	},{
            label:'010022222_222222',
            url:'menu02_item02',
            class:''
        }];
	}
}]);