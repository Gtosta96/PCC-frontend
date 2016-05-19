var app = angular.module('pccApp.allTravels.controller', []);

app.controller('AllTravelsCtrl', function(HandlerService, AllTravelsListServiceMock, CookiesService) {

  var vm = this;

  // AllTravelsListService.get().$promise.then(function(travelsList) {
  //   vm.userTravelsList = travelsList;
  // }, HandlerService.callbackError);

  //MOCK
  vm.travelsList = AllTravelsListServiceMock;
});
