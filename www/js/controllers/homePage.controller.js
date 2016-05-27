(function() {
  'use strict';

  var app = angular.module('pccApp.homePage.controller', [
    'pccApp.handlerService.service',
    'pccApp.cameraService.service',
    'pccApp.restService.service',
    'pccApp.cookiesService.service',
    'ngCordova'
  ]);

  app.controller('HomePageCtrl', function($scope, $cordovaCamera, HandlerService, CameraService, SaveTravelRestService, TravelsListRestService, CookiesService) {

    var vm = this;
    vm.travel = {};
    vm.travel.resources = [];
    vm.travel.comments = [];

    vm.infiniteScroll = {};
    vm.infiniteScroll.travels = [];
    vm.infiniteScroll.requestListTravels = {pag: 0, tam: 5};
    vm.infiniteScroll.noMoreItemsAvailable = false;

    var request = {
      id: 1,
      pagination : vm.infiniteScroll.requestListTravels
    };

    vm.loadMoreTravels = function() {
        TravelsListRestService.get(request).then(function(success) {
          if(success.data.length != 0) {
            for(var i = 0; i < success.data.length; i++) {
              vm.infiniteScroll.travels.push = sucess.data;
            }
          } else {
            vm.infiniteScroll.noMoreItemsAvailable = true;
          }
        }, HandlerService.callbackError);
    }

		vm.setDaysCallback = function(days) {
			vm.travel.days = days;
		};

    vm.importPicture = function() {
      var options = CameraService.getPictureOptions(0);
      $cordovaCamera.getPicture(options).then(function(imageData) {
        vm.travel.resources.push("data:image/jpeg;base64," + imageData);
      }, HandlerService.callbackError);
    }

    vm.takePicture = function() {
      var options = CameraService.getPictureOptions(1);
      $cordovaCamera.getPicture(options).then(function(imageData) {
        vm.travel.resources.push("data:image/jpeg;base64," + imageData);
      }, HandlerService.callbackError);
    }

    vm.saveTravel = function(travel) {
			travel.isFacebookUser = CookiesService.getUser().isFacebookUser;
      SaveTravelRestService.save(travel).$promise.then(function(success) {
        console.log("work");
      }, HandlerService.callbackError);
    }
  });
}());
