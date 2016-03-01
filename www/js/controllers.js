var app = angular.module('pccApp.controllers', []);

app.controller('LoginCtrl', function($scope, $state, $ionicPopup, LoginAuthService) {
	
	//model
	$scope.model = {};
	
	//loginAuth method
	$scope.loginAuth = function() {
		var credentials = {
				username : $scope.model.username,
				password : $scope.model.password
		}
		LoginAuthService.query(credentials, function(data) {
		    console.log(data);
		  });
	}
	
	//go method
	$scope.go = function (tela) {
	      $state.go(tela);
    };
});

app.controller('SignupCtrl', function($scope) {
  //TODO 
});
