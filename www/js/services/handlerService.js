var app = angular.module('pccApp.services.handlerService', []);

/*
 * Funções comuns.
 * 	callbackError: utilizada para erros de promises.
 *  go: utilizada para redirecionamento de páginas.
 */

app.factory('HandlerService', function($state, $log, $ionicPopup) { 
	return {
		go: go,
		callbackError: callbackError
    };
    
    function go(tela) {
    	$state.go(tela);
    };
    
	function callbackError(error) {
		
		var title = null;
		var message = null;
		if (error.data) {
			title = error.data.title || 'Erro.';
			message = error.data.message || 'Erro na aplicação. [BUG]';			
		} else {
			title = 'Erro.';
			message = 'Erro na aplicação. [BUG]';
		}
		
		$ionicPopup.alert({
			title: title,
			template: message
		});
		
		$log.error('Ocorreu um erro: %o', error);
	};
});
    