var app = angular.module('pccApp.signUp.controller', ['ngMessages']);

app.controller('SignUpCtrl', function(SignUpService, HandlerService) {

  var vm = this;

  vm.signUp = function(form, user) {
    if (form.$valid) {
      SignUpService.save(user).$promise.then(function(success) {
        HandlerService.go('login');
      }, HandlerService.callbackError);
    }
  };
});
