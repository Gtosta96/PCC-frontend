(function() {
  'use strict';

  var app = angular.module('pccApp.login.controller', [
    'pccApp.loginService.service',
    'pccApp.handlerService.service',
  ]);

  app.controller('LoginCtrl', function(ngFB, LoginAuthRestService, SignUpRestService, LoginService, HandlerService) {

    var vm = this;

    vm.loginAuth = function(form, credentials) {
      LoginAuthRestService.save(credentials).$promise.then(function(user) {
				user = HandlerService.parseUser(user);
        LoginService.login(user);
      }, HandlerService.callbackError);
    };

    vm.fbAuth = function() {
      ngFB.login({
        scope: 'email, public_profile, user_friends, user_birthday'
      }).then(function(success) {
        ngFB.api({
          path: '/me',
          params: {
            fields: 'first_name, last_name, email, picture, birthday'
          }
        }).then(function(user) {
        	var parsedUser = HandlerService.parseUser(user);
					var userToServer = HandlerService.parseUserFromFacebookToSendToServer(parsedUser);
					SignUpRestService.save(userToServer).$promise.then(function(result) {
						LoginService.login(parsedUser);
	        }, HandlerService.callbackError);
        }, HandlerService.callbackError);
      });
    };
  });
}());
