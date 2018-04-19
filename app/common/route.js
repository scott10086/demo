'use strict';

app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('menu01');
	$stateProvider
	.state('menu01',{
		url: '/menu01',
		views:{
			"banner":{templateUrl: 'partials/content/ctrl01/template.html', controller: 'Ctrl01'},
			"leftMenu":{templateUrl: 'partials/content/ctrl02/template.html', controller: 'Ctrl02'},
			"content":{templateUrl: 'partials/content/ctrl03/template.html', controller: 'Ctrl03'}
		}
	})
	.state('menu02',{
		url: '/menu02',
		views:{
			"banner":{templateUrl: 'partials/content/ctrl03/template.html', controller: 'Ctrl03'},
			"leftMenu":{templateUrl: 'partials/content/ctrl01/template.html', controller: 'Ctrl01'},
			"content":{templateUrl: 'partials/content/ctrl02/template.html', controller: 'Ctrl02'}
		}
	})


}]);