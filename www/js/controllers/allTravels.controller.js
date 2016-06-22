(function() {
  'use strict';

  var app = angular.module('pccApp.allTravels.controller', [
    'pccApp.handlerService.service',
    'pccApp.mockService.service',
    'pccApp.cookiesService.service'
  ]);

  app.controller('AllTravelsCtrl', function(HandlerService, AllTravelsListMockService, CookiesService) {
    var vm = this;
		vm.infiniteScroll = {};

		vm.setTravelsCallback = function(data) {
      vm.infiniteScroll.travels = data;
    };
  });
}());
