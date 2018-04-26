'use strict';
// var app = angular.module('myApp.directives', []);

app.directive('header001Dire', function() {
    return {
        restrict:"EACM",
        replace: true,
        templateUrl: 'partials/header/header001/template.html',
        scope:{},
        controller: function($scope, $element, $attrs, $transclude) { 
            // 控制器逻辑放在这里 
            $scope.hello = "666666";
        } 

    };
});

// （1）$scope，与指令元素相关联的作用域

// （2）$element，当前指令对应的 元素

// （3）$attrs，由当前元素的属性组成的对象

// （4）$transclude，嵌入链接函数，实际被执行用来克隆元素和操作DOM的函数