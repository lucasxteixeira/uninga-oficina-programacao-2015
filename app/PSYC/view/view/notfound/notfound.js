'use strict';

angular.module('myApp.notfound', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/404', {
		templateUrl: 'view/view/notfound/notfound.html',
		controller: 'notfoundCtrl'
	});
}])

.controller('notfoundCtrl', [function() {

}]);