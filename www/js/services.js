var app = angular.module('pccApp.services', ['ngResource']);

app.factory('LoginAuthService', function($resource) {
	return $resource("http://localhost:8080/PCC-backend/loginAuth")	
});