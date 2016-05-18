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
      scope: 'email, public_profile, user_friends, user_birthday'
    }).then(function(success) {
      if (success.status === 'connected') {
        ngFB.api({
          path: '/me',
          params: {
            fields: 'first_name, last_name, email, picture, birthday'
          }
        }).then(function(user) {
          console.log(user);
          LoginService.login(user, true);
        }, HandlerService.callbackError);
      } else {
        HandlerService.callbackError;
      }
    });
  };
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
      SignUpService.save(user).$promise.then(function(success) {
        HandlerService.go('login');
      }, HandlerService.callbackError);
    }
  };
});
