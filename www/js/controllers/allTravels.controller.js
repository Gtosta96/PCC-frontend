var app = angular.module('pccApp.allTravels.controller', [
  'pccApp.handlerService.service',
  'pccApp.mockService.service',
  'pccApp.cookiesService.service'
]);

app.controller('AllTravelsCtrl', function(HandlerService, AllTravelsListMockService, CookiesService) {

  var vm = this;

  // AllTravelsListService.get().$promise.then(function(travelsList) {
  //   vm.userTravelsList = travelsList;
  // }, HandlerService.callbackError);

  //MOCK
  vm.travelsList = AllTravelsListMockService;
});
