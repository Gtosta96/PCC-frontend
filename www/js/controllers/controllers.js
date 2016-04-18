var app = angular.module('pccApp.controllers', ['pccApp.controllers.userController']);

//Funções comuns

function go ($state, tela) {
	$state.go(tela);
};

function callbackError(error) {
	console.log("Error: " + JSON.stringify(error));
};