(function() {
  'use strict';

  var app = angular.module('pccApp.travelInfo.controller', [
    'pccApp.restService.service',
    'pccApp.handlerService.service',
  ]);

  app.controller('TravelInfoCtrl', function($stateParams, $scope, TravelInfoRestService, HandlerService) {

    var vm = this;

		// $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
  // 		viewData.enableBack = true;
		// });

		TravelInfoRestService.get($stateParams).$promise.then(function(result) {
			vm.travelInfo = result;
		}, HandlerService.callbackError);
  });
}());
