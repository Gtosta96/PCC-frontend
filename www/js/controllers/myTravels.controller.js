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

		vm.remove = function(travel) {
			DeleteTravelRestService.get({id: travel.travelId}).$promise.then(function() {
				var travels = vm.infiniteScroll.travels;
				for(var i = 0; i < travels.length; i++) {
					if(travels[i].travelId = travel.travelId) {
						travels.splice(travels.indexOf(travels[i]), 1);
					};
				}
			}, HandlerService.callbackError);
    };

    vm.setTravelsCallback = function(data) {
      vm.infiniteScroll.travels = data;
    };
  });
}());
