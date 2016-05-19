var app = angular.module('pccApp.login.controller', []);

app.controller('LoginCtrl', function($state, $log, ngFB, LoginAuthService, LoginService, CookiesService, HandlerService) {

  var vm = this;

  vm.loginAuth = function(form, credentials) {

    LoginAuthService.save(credentials).$promise.then(function(user) {
      LoginService.login(user);
    }, HandlerService.callbackError);
  };

  vm.fbAuth = function() {
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
          LoginService.login(user, true);
        }, HandlerService.callbackError);
      } else {
        HandlerService.callbackError;
      }
    });
  };
});
