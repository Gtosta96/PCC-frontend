var app = angular.module('pccApp.services.userService', ['ngResource']);

app.factory('LoginAuthService', function($resource) {
	return $resource("http://localhost:8080/PCC-backend/loginAuth", {data : '@data'});
});

app.factory('SignUpService', function($resource) {
	return $resource("http://localhost:8080/PCC-backend/signUp", {data : '@data'});
});