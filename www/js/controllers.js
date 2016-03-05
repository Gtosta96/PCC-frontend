var app = angular.module('pccApp.controllers', []);

app.controller('LoginCtrl', function($scope, $state, $ionicPopup, LoginAuthService, ngFB) {

	// inicializa objeto de dados (provenientes da tela)
	$scope.data = {};

	// manually authentication
	$scope.loginAuth = function() {
		LoginAuthService.save($scope.data).$promise.then(function(success) {
			console.log(success);
		}, function(error) {
			console.log(error);
		});
	};
	
	//authentication by facebook
	$scope.fbAuth = function() {
		ngFB.login({scope: 'email, public_profile, user_friends'}).then(
	    function (response) {
            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                $scope.closeLogin();
            } else {
                alert('Facebook login failed');
            }
        });
	};

	// go method
	$scope.go = function(tela) {
		$state.go(tela);
	};
});

app.controller('SignupCtrl', function($scope) {
	// TODO
});
