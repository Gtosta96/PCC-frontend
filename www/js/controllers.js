var app = angular.module('pccApp.controllers', []);

app.controller('LoginCtrl', function($scope, $state, $ionicPopup, LoginAuthService, ngFB) {

	// inicializa objeto de dados (provenientes da tela)
	$scope.data = {};

	// manually authentication
	$scope.loginAuth = function(user) {
		if(user) {
			LoginAuthService.save(user).$promise.then(function(success) {
				
				console.log(success);
				$state.go('homePage');
			}, callbackError);
		} else {
			$ionicPopup.alert({
			     title: 'Campos vazios',
			     template: 'Preencha os campos para continuar'
		    });
		}
	};
	
	//authentication by facebook
	$scope.fbAuth = function() {
		ngFB.login({scope: 'email, public_profile, user_friends'}).then(
		    function (response) {
	            console.log(response);
	        }, callbackError); // call callbackError function if promise fail
	};

	// go method
	$scope.go = function(tela) {
		$state.go(tela);
	};
});

app.controller('SignupCtrl', function($scope) {
	// TODO
});

//Functions
function callbackError(error){
	console.log("error");
	console.log(error);
}
