'use strict';
// var app = angular.module('myApp.controllers', []);

app.controller('LeftMenuCtrl', ['$scope','$location', function($scope,$location) {
	var _url = $location.path();
	console.log(_url);
	if(_url.indexOf('menu01')!= -1){
    	$scope.items = [{
    		label:'010011111_111111',
    		url:'menu01_item01',
            class:_url.indexOf('menu01_item01')!= -1?'active':''
    	},{
            label:'010011111_222222',
            url:'menu01_item02',
            class:_url.indexOf('menu01_item02')!= -1?'active':''
        },{
    		label:'010011111_333333',
    		url:'menu01_item03',
            class:_url.indexOf('menu01_item03')!= -1?'active':''
    	}];
	}
	if(_url.indexOf('menu02')!= -1){
    	$scope.items = [{
    		label:'010022222_111111',
    		url:'menu02',
            class:_url.indexOf('menu02_item01')!= -1?'active':''
    	},{
            label:'010022222_222222',
            url:'menu02_item02',
            class:_url.indexOf('menu02_item02')!= -1?'active':''
        }];
	}
}]);