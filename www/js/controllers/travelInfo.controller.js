(function() {
  'use strict';

  var app = angular.module('pccApp.travelInfo.controller', [
    'pccApp.restService.service',
    'pccApp.handlerService.service',
  ]);

  app.controller('TravelInfoCtrl', function($stateParams, HandlerService, TravelInfoRestService) {

    var vm = this;

    // vm.travelInfo = TravelInfoRestService;
  });
}());
