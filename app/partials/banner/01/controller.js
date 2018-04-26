'use strict';
// var app = angular.module('myApp.controllers', []);

app.controller('BannerCtrl', ['$scope', '$location', function($scope,$location) {
	var url = $location.path();
	
	if(url.indexOf('menu01')!= -1){
    	$scope.banner = {
    		label:'banner01',
    		url:'assets/images/banner/banner01.jpg'
    	};
	}
	if(url.indexOf('menu02')!= -1){
    	$scope.banner = {
    		label:'banner02',
    		url:'assets/images/banner/banner02.jpg'
    	};
	}
	if(url.indexOf('menu03')!= -1){
    	$scope.banner = {
    		label:'banner03',
    		url:'assets/images/banner/banner03.jpg'
    	};
	}
}]);