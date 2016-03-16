var app = angular.module('pccApp.controllers.userController', ['ngMessages']);

app.controller('LoginCtrl', function($scope, $state, LoginAuthService, ngFB) {
	
	$scope.loginAuth = function(form, user) {
		
		LoginAuthService.save(user).$promise.then(function (success) {
			
			console.log(success.data);
			go($state, 'homePage');
			
		}, callbackError); // função callback (localizada em controllers.js)
	};
	
	$scope.fbAuth = function() {
		ngFB.login({scope: 'email, public_profile, user_friends'}).then(function (response) {
			
			console.log(response);
        }, callbackError); // função callback (localizada em controllers.js)
	};

	$scope.go = function(tela){
		go($state, tela);
	}
});

app.controller('SignUpCtrl', function($scope, SignUpService) {
	
	$scope.signUp = function(form, user) {
		
		var first = form.firstName.$error;
		var last = form.lastName.$error;
		debugger;
		SignUpService.save(user).$promise.then(function (success) {
			
			console.log(success.data);
		}, callbackError);
	};
});