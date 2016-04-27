/*
 * Funções comuns (localizada em controllers.js)
 * 	callbackError.
 *  go.
 */

var app = angular.module('pccApp.controllers.userController', [ 'ngMessages' ]);

app.controller('LoginCtrl', function($rootScope, $scope, $state, ngFB, LoginAuthService, CookiesService) {
	$scope.loginAuth = function(form, user) {
		LoginAuthService.save(user).$promise.then(function(success) {
			console.log(success.data);
			go($state, 'homePage');
		}, callbackError);
	};

	$scope.fbAuth = function() {
		ngFB.login({scope: 'email, public_profile, user_friends'}).then(function(success) {
			    if (success.status === 'connected') {
			        ngFB.api({
			            path: '/me',
			            params: {fields: 'id, first_name, last_name, email, picture'}
			        }).then(
			            function (user) {
			                CookiesService.setUser(user);
			                $rootScope.isLoggedIn = CookiesService.isLoggedIn();
			                console.log($rootScope.isLoggedIn);
			                go($state, 'homePage');
			            }, callbackError);
			    } else {
			        console.log('Facebook login failed');
			    }
			}
		);
	};

	$scope.go = function(tela) {
		go($state, tela);
	}
});

app.controller('SignUpCtrl', function($scope, SignUpService) {
	$scope.signUp = function(form, user) {
		SignUpService.save(user).$promise.then(function(success) {
			go($state, 'login');
			console.log(success);
		}, callbackError);
	};
});