var app = angular.module('pccApp.myTravels.controller', [
  'pccApp.handlerService.service',
  'pccApp.mockService.service',
  'pccApp.cookiesService.service',
]);

app.controller('MyTravelsCtrl', function(HandlerService, MyTravelsListMockService, CookiesService) {

  var vm = this;

  // var userId = {
  //   userId: CookiesService.getUser().id
  // };

  // MyTravelsListRestService.get(userId).$promise.then(function(travelsList) {
  //   vm.myTravelsList = travelsList;
  // }, HandlerService.callbackError);

  //MOCK
  vm.myTravelsList = MyTravelsListMockService;
});
