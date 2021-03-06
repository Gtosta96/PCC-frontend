(function() {
  'use strict';

  var app = angular.module('pccApp.travelInfo.controller', [
    'pccApp.restService.service',
    'pccApp.handlerService.service',
		'pccApp.loadingService.service',
  ]);

  app.controller('TravelInfoCtrl', function($stateParams, $scope, TravelInfoRestService, HandlerService, LoadingService) {
    $scope.$on('$ionicView.beforeEnter', function(event, viewData) {
      viewData.enableBack = true;
    });

    var vm = this;
    LoadingService.show();

    TravelInfoRestService.get($stateParams).$promise.then(function(result) {
      LoadingService.hide();
      vm.travelInfo = result;
      vm.setRankCallback = loadRanking(vm.travelInfo.rank);
    }, HandlerService.callbackError);

    function loadRanking(rank) {
      return {
        iconOn: 'ion-ios-star',
        iconOff: 'ion-ios-star-outline',
        iconOnColor: '#FFC900',
        iconOffColor: '#DDD',
        rating: rank,
        readOnly: true,
        callback: function() {}
      }
    }
  });
}());
