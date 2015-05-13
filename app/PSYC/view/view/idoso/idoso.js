'use strict';

angular.module('myApp.idoso', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/idoso', {
		templateUrl: 'view/view/idoso/idoso.html',
		controller: 'idosoCtrl'
	});
}])

.controller('idosoCtrl', [function() {

}]);
