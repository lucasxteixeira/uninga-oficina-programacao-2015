'use strict';

angular.module('myApp.', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/pessoa', {
		templateUrl: 'view/view/pessoa/pessoa.html',
		controller: 'pessoaCtrl'
	});
}])

.controller('pessoaCtrl', [function() {

}]);
