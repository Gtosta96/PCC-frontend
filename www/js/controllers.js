var app = angular.module('pccApp.controllers', []);

app.controller('LoginCtrl', function($scope, $state, $ionicPopup,
		LoginAuthService) {

	// inicializa objeto de dados (provenientes da tela)
	$scope.data = {};

	// loginAuth method
	$scope.loginAuth = function() {
		LoginAuthService.save($scope.data).$promise.then(function(success) {
			console.log(success);
		}, function(error) {
			console.log(error);
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
