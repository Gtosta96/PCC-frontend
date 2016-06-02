(function() {
  'use strict';

  var app = angular.module('pccApp.handlerService.service', []);

  app.factory('HandlerService', function($state, $log, $ionicPopup) {
    return {
      go: go,
      callbackError: callbackError,
      parseUser: parseUser,
			parseUserFromFacebookToSendToServer: parseUserFromFacebookToSendToServer
    };

    function go(tela) {
      $state.go(tela);
    };

    function callbackError(error) {

      if (error === "Camera cancelled.") return;

      var title;
      var message;
      if (error.data && error.data.title && error.data.message) {
        title = error.data.title;
        message = error.data.message;
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

    function parseUser(user) {
			return {
        id: user.id || user.userId || null,
        firstName: user.first_name || user.firstName || null,
        lastName: user.last_name || user.lastName || null,
        email: user.email || (user.userDetails && user.userDetails.email) || null,
        bornDate: user.birthday || user.bornDate || null,
        picture: user.picture && user.picture.data.url || null,
      }
    };

		function parseUserFromFacebookToSendToServer(user) {
			var newUser = {};
			newUser.facebookUserId = user.id;
			newUser.firstName = user.firstName;
			newUser.lastName = user.lastName;
			newUser.email = user.email;
			newUser.bornDate = new Date(user.bornDate);
			newUser.facebookUser = true;

			return newUser;
		}
  });
}());
