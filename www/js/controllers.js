var app = angular.module('pccApp.controllers', []);

app.controller('LoginCtrl', function($scope, $state, $ionicPopup, LoginAuthService) {
	
	//model
	$scope.model = {};
	
	//Login controller
	$scope.loginAuth = function() {
		var entries = LoginAuthService.query(function() {
		    console.log(entries);
		  });
	}
	
	//go
	$scope.go = function (tela) {
	      $state.go(tela);
    };
});

app.controller('SignupCtrl', function($scope) {
  //TODO 
});
