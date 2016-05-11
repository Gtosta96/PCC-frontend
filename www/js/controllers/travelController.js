/*
 * Funções comuns (localizada em controllers.js)
 * 	callbackError.
 *  go.
 */

var app = angular.module('pccApp.controllers.travelController', []);

app.controller('HomePageCtrl', function($scope, HandlerService, ONE_DAY) {

  var _this = this;

  //TODO: Criar diretiva para o código abaixo.
  $scope.$watch(function watchForm(scope) {
    return _this.saveTravelForm.$valid && !_this.saveTravelForm.$pristine;
  }, function handleWatchedForm(newValue, oldValue) {
    if (newValue) {
      var startDate = _this.travel.startDate;
      var endDate = _this.travel.endDate;

      var days = [];
      var auxDate = startDate;
      while (auxDate.getTime() <= endDate.getTime()) {
        days.push(auxDate);
        auxDate = new Date(auxDate.getTime() + ONE_DAY); //TODO: Verificar modo para retirar new Date.
      }

      _this.travel.days = days;
      _this.travel.totalDays = days.length;
    }
  });
});

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

app.controller('TravelInfoCtrl', function($stateParams, HandlerService, TravelInfoService) {

  var _this = this;
  console.log($stateParams);

  // TravelInfoService.get($stateParams).$promise.then(function(travelInfo) {
  //   _this.travelInfo = travelInfo;
  // }, HandlerService.callbackError);

  _this.travelsList = TravelInfoService;
});

app.controller('TravellerInfoCtrl', function($stateParams, HandlerService, TravelInfoService) {

  var _this = this;
  console.log($stateParams);

});
