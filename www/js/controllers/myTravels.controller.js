(function() {
  'use strict';

  var app = angular.module('pccApp.myTravels.controller', [
    'pccApp.cookiesService.service',
		'pccApp.restService.service',
		'pccApp.handlerService.service'
  ]);

  app.controller('MyTravelsCtrl', function(CookiesService, DeleteTravelRestService, HandlerService) {

    var vm = this;
    vm.infiniteScroll = {};
    vm.userId = CookiesService.getUser().id;

		vm.remove = function(id) {
			DeleteTravelRestService(id).$promise.then(function() {

			}, HandlerService.callbackError);
    };

    vm.setTravelsCallback = function(data) {
      vm.infiniteScroll.travels = data;
    };
  });
}());
