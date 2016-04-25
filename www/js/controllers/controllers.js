var app = angular.module('pccApp.controllers', ['pccApp.controllers.userController']);

/*
 * Funções comuns (localizada em controllers.js)
 * 	callbackError: utilizada para erros de promises.
 *  go: utilizada para redirecionamento de páginas.
 */

function go($state, tela) {
	$state.go(tela);
};

function callbackError(error) {
	console.log("Ocorreu um erro: %o", error);
};