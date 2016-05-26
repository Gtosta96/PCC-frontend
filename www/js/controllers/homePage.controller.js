(function() {
  'use strict';

  var app = angular.module('pccApp.homePage.controller', [
    'pccApp.handlerService.service',
    'pccApp.cameraService.service',
    'pccApp.restService.service',
    'pccApp.cookiesService.service',
    'ngCordova'
  ]);

  app.controller('HomePageCtrl', function($scope, $cordovaCamera, HandlerService, CameraService, SaveTravelRestService, CookiesService) {

    var vm = this;
    vm.travel = {};
    vm.travel.resources = [];
    vm.travel.comments = [];

    // $scope.$watch(function watchForm(scope) {
    //   return vm.saveTravelForm.$valid && !vm.saveTravelForm.$pristine;
    // }, function handleWatchedForm(newValue, oldValue) {
    //   if (newValue) {
    //     var startDate = vm.startDate;
    //     var endDate = vm.endDate;
    //
    //     var days = [];
    //     var auxDate = startDate;
    //     while (auxDate.getTime() <= endDate.getTime()) {
    //       days.push(auxDate);
    //       auxDate = new Date(auxDate.getTime() + 86400000);
    //     }
    //
    //     vm.travel.days = days;
    //   }
    // });

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
