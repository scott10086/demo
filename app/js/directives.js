'use strict';
// var app = angular.module('myApp.directives', []);

app.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
}]);

app.directive('runoobDirective', function() {
    return {
    	replace: true,
        template: '<h6>自定义指令!</h6>'
    };
});