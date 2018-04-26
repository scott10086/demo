'use strict';

app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('menu01');
	var routerJson = [{
						'_url': 'menu01',
					    'content': {
					        'temp': 'partials/content/01/001/ctrl01/template.html',
					        'ctrl': 'Content01001Ctrl01'
					    }
					}, {
						'_url': 'menu01_item02',
					    'content': {
					        'temp': 'partials/content/01/001/ctrl02/template.html',
					        'ctrl': 'Content01001Ctrl02'
					    }
					}, {
						'_url': 'menu01_item03',
					    'content': {
					        'temp': 'partials/content/01/001/ctrl03/template.html',
					        'ctrl': 'Content01001Ctrl03'
					    }
					}, {
						'_url': 'menu02',
					    'content': {
					        'temp': 'partials/content/01/002/ctrl01/template.html',
					        'ctrl': 'Content01002Ctrl01'
					    }
					}, {
						'_url': 'menu02_item02',
					    'content': {
					        'temp': 'partials/content/01/002/ctrl02/template.html',
					        'ctrl': 'Content01002Ctrl02'
					    }
					}];
	for(var i=0;i<routerJson.length;i++){	
		var _url = routerJson[i]._url;
		$stateProvider
		.state(_url,{
			url: '/'+_url,
			views:{
				'banner':{templateUrl: 'partials/banner/01/template.html', controller: 'BannerCtrl'},
				'leftMenu':{templateUrl: 'partials/leftMenu/01/template.html', controller: 'LeftMenuCtrl'},
				'content':{templateUrl: routerJson[i].content.temp, controller: routerJson[i].content.ctrl}
			}
		});
	}
}]);