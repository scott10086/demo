'use strict';
// var app = angular.module('myApp.services', []);

app.factory('dataFactory', ['$http', function($http) {

    this.getData = function(url, method, type, params) {
        $http({
            url: url,
            method: method,
            params: parmas
        }).success(function(response, status, headers, config) {
            /*response   -- 成功返回的数据 
              status     -- 状态码 
              headers    -- 头信息 
              config     -- 其他信息 
            */
            return response.data;
        }).error(function(response) {
            console.log('获取数据异常');
            return null;
        })
    };
}])