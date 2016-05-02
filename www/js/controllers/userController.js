/*
 * Funções comuns (localizada em controllers.js)
 * 	callbackError.
 *  go.
 */

var app = angular.module('pccApp.controllers.userController', ['ngMessages']);

app.controller('LoginCtrl', function($state, $log, ngFB, LoginAuthService, LoginService, CookiesService, HandlerService) {

  var _this = this;

  _this.loginAuth = function(form, credentials) {
    LoginAuthService.save(credentials).$promise.then(function(user) {
      LoginService.login(user);
    }, HandlerService.callbackError);
  };

  _this.fbAuth = function() {
    ngFB.login({
      scope: 'email, public_profile, user_friends'
    }).then(function(success) {
      if (success.status === 'connected') {
        ngFB.api({
          path: '/me',
          params: {
            fields: 'id, first_name, last_name, email, picture'
          }
        }).then(function(user) {
          LoginService.login(user);
        }, HandlerService.callbackError);
      } else {
        HandlerService.callbackError;
      }
    });
  };

  _this.go = function(tela) {
    HandlerService.go(tela);
  }
});

app.controller('optionsCtrl', function($rootScope, LoginService, CookiesService, HandlerService) {

  var _this = this;

  _this.logout = function() {
    LoginService.logout();
  }
});

app.controller('SignUpCtrl', function(SignUpService, HandlerService) {

  var _this = this;

  _this.signUp = function(form, user) {
    if (!form.$invalid) {
      user.bornDate = user.bornDate.toString();
      SignUpService.save(user).$promise.then(function(success) {
        HandlerService.go('login');
        console.log(success);
      }, HandlerService.callbackError);
    }
  };
});
