/*
 * Funções comuns (localizada em controllers.js)
 * 	callbackError.
 *  go.
 */

var app = angular.module('pccApp.controllers.travelController', []);

app.controller('RankingCtrl', function(HandlerService, TravelsListService, CookiesService) {

  var _this = this;
  var userId = {
    userId: CookiesService.getUser().id
  };

  TravelsListService.get(userId).$promise.then(function(travelsList) {
    _this.userTravelsList = travelsList;
  }, HandlerService.callbackError);
});
