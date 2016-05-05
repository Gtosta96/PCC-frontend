/*
 * Funções comuns (localizada em controllers.js)
 * 	callbackError.
 *  go.
 */

var app = angular.module('pccApp.controllers.travelController', []);

app.controller('MyTravelsCtrl', function(HandlerService, MyTravelsListService, CookiesService) {

  var _this = this;
  var userId = {
    userId: CookiesService.getUser().id
  };

  // TravelsListService.get(userId).$promise.then(function(travelsList) {
  //   _this.myTravelsList = travelsList;
  // }, HandlerService.callbackError);

  //MOCK
   _this.myTravelsList = MyTravelsListService;
});

app.controller('AllTravelsCtrl', function(HandlerService, AllTravelsListService, CookiesService) {

  var _this = this;

  // AllTravelsListService.get().$promise.then(function(travelsList) {
  //   _this.userTravelsList = travelsList;
  // }, HandlerService.callbackError);

  //MOCK
   _this.travelsList = AllTravelsListService;
});
