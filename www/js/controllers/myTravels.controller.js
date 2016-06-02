(function() {
  'use strict';

  var app = angular.module('pccApp.myTravels.controller', [
    'pccApp.handlerService.service',
    'pccApp.mockService.service',
    'pccApp.cookiesService.service',
  ]);

  app.controller('MyTravelsCtrl', function(HandlerService, MyTravelsListMockService, CookiesService) {
    var vm = this;
		vm.infiniteScroll = {};
    vm.userId = CookiesService.getUser().id;

		vm.setTravelsCallback = function(data) {
      vm.infiniteScroll.travels = data;
    };

    // MOCK
    vm.infiniteScroll.travels = MyTravelsListMockService;
  });
}());
