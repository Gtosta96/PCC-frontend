var app = angular.module('pccApp.signUp.controller', [
  'pccApp.handlerService.service',
  'pccApp.restService.service',
  'ngMessages'
]);

app.controller('SignUpCtrl', function(SignUpRestService, HandlerService) {

  var vm = this;

  vm.signUp = function(form, user) {
    if (form.$valid) {
      SignUpRestService.save(user).$promise.then(function(success) {
        HandlerService.go('login');
      }, HandlerService.callbackError);
    }
  };
});
