/*
 * Funções comuns (localizada em controllers.js)
 * 	callbackError.
 *  go.
 */

var app = angular.module('pccApp.controllers.userController', ['ngMessages']);

app.controller('LoginCtrl', function($state, $log, ngFB, LoginAuthService, LoginService, CookiesService, HandlerService, LOGGED_FROM_FACEBOOK) {

  var _this = this;

  _this.loginAuth = function(form, credentials) {
    LoginAuthService.save(credentials).$promise.then(function(user) {
      LoginService.login(user);
    }, HandlerService.callbackError);
  };

  _this.fbAuth = function() {
    ngFB.login({
      scope: 'email, public_profile, user_friends, user_birthday'
    }).then(function(success) {
      console.log(success);
      if (success.status === 'connected') {
        ngFB.api({
          path: '/me',
          params: {
            fields: 'first_name, last_name, email, picture, birthday'
          }
        }).then(function(user) {
          console.log(user);
          LoginService.login(user, LOGGED_FROM_FACEBOOK);
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

app.controller('optionsCtrl', function(LoginService, CookiesService) {

  var _this = this;

  _this.logout = function() {
    LoginService.logout();
  };

  _this.user = CookiesService.getUser();

  console.log(_this.user);
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
