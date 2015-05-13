'use strict';

angular.module(
    'myApp', [
		'ngRoute',
		'myApp.organizacao',
        'myApp.usuario',
        'myApp.idoso',
        'myApp.notfound',
        'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/404'});
}]);
