var app = angular.module('pccApp.controllers', []);

app.controller('LoginCtrl', function($scope, $state) {
	$scope.go = function (tela) {
      $state.go(tela);
    }
})

app.controller('SignupCtrl', function($scope) {
  // 
});
