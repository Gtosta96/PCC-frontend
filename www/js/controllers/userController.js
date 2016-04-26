/*
 * Funções comuns (localizada em controllers.js)
 * 	callbackError.
 *  go.
 */

var app = angular.module('pccApp.controllers.userController', [ 'ngMessages' ]);

app.controller('LoginCtrl', function($rootScope, $scope, $state, LoginAuthService, ngFB) {
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
			                console.log(user);
/*			                $scope.user.email = user.email;
			                $scope.user.first_name = user.first_name;
			                $scope.user.last_name = user.last_name;
			                $scope.user.id_facebook = user.id;
			                $scope.user.photo_facebook = user.picture.data.url;*/
			                
			                $rootScope.isLoggedIn = true;
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