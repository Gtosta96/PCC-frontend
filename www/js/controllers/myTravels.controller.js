(function() {
  'use strict';

  var app = angular.module('pccApp.myTravels.controller', [
    'pccApp.cookiesService.service',
  ]);

  app.controller('MyTravelsCtrl', function(CookiesService) {

    var vm = this;
    vm.infiniteScroll = {};
    vm.userId = CookiesService.getUser().id;

    vm.setTravelsCallback = function(data) {
      vm.infiniteScroll.travels = data;
    };
  });
}());
