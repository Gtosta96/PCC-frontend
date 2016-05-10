/*
 * Funções comuns (localizada em controllers.js)
 * 	callbackError.
 *  go.
 */

var app = angular.module('pccApp.controllers.travelController', []);

app.controller('HomePageCtrl', function($scope, HandlerService) {

  var _this = this;

  $scope.$watch(function watchForm() {

    var form = _this.saveTravelForm;
    if (form.$valid && !form.$pristine) {
      //TODO: FIX
      return true;
    }
    return false;
  }, function handleWatchedForm(newValue, oldValue) {
    if (newValue) {
      var timeDiff = Math.abs(_this.travel.startDate.getTime() - _this.travel.endDate.getTime());
      var totalDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

      _this.totalDays = [];
      for(var i = 0; i < totalDays; i++) {
        _this.totalDays.push(i);
      }
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
