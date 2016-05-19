var app = angular.module('pccApp.options.controller', [
  'pccApp.cookiesService.service',
  'pccApp.loginService.service',
]);

app.controller('optionsCtrl', function(LoginService, CookiesService) {

  var vm = this;

  vm.logout = function() {
    LoginService.logout();
  };

  vm.user = CookiesService.getUser();
});
