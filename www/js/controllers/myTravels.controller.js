var app = angular.module('pccApp.myTravels.controller', []);

app.controller('MyTravelsCtrl', function(HandlerService, MyTravelsListServiceMock, CookiesService) {

  var vm = this;

  // var userId = {
  //   userId: CookiesService.getUser().id
  // };

  // TravelsListService.get(userId).$promise.then(function(travelsList) {
  //   vm.myTravelsList = travelsList;
  // }, HandlerService.callbackError);

  //MOCK
  vm.myTravelsList = MyTravelsListServiceMock;
});
