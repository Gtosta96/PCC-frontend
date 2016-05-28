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
    vm.infiniteScroll.requestListTravels = {pag: 1, len: 5};
    vm.infiniteScroll.noMoreItemsAvailable = false;

    vm.loadMoreTravels = function() {
        TravelsListRestService.query(vm.infiniteScroll.requestListTravels).$promise.then(function(response) {
          if(response) {
            for(var i = 0; i < response.length; i++) {
              vm.infiniteScroll.travels.push(response[i]);
            }
            vm.infiniteScroll.requestListTravels.pag++;
            $scope.$broadcast('scroll.infiniteScrollComplete');
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
