'use strict';

angular.module('myApp.usuario', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/usuario', {
		templateUrl: 'view/view/usuario/usuario.html',
		controller: 'usuarioCtrl'
	});
}])

.controller('usuarioCtrl', [function() {

}]);
