(function() {
  'use strict';

  var app = angular.module('pccApp.homePage.controller', [
    'pccApp.handlerService.service',
    'pccApp.cameraService.service',
    'ngCordova'
  ]);

  app.controller('HomePageCtrl', function($scope, $cordovaCamera, HandlerService, CameraService) {

    var vm = this;
    vm.travel = {};
    vm.travel.imgs = [];
    vm.travel.comments = [];

    //TODO: Criar diretiva para o código abaixo.
    $scope.$watch(function watchForm(scope) {
      return vm.saveTravelForm.$valid && !vm.saveTravelForm.$pristine;
    }, function handleWatchedForm(newValue, oldValue) {
      if (newValue) {
        var startDate = vm.travel.startDate;
        var endDate = vm.travel.endDate;

        var days = [];
        var auxDate = startDate;
        while (auxDate.getTime() <= endDate.getTime()) {
          days.push(auxDate);
          auxDate = new Date(auxDate.getTime() + 86400000);
        }

        vm.travel.days = days;
        vm.travel.totalDays = days.length;
      }
    });

    vm.importPicture = function() {
      var options = CameraService.getPictureOptions(0);
      $cordovaCamera.getPicture(options).then(function(imageData) {
        vm.travel.imgs.push("data:image/jpeg;base64," + imageData);
      }, HandlerService.callbackError);
    }

    vm.takePicture = function() {
      var options = CameraService.getPictureOptions(1);
      $cordovaCamera.getPicture(options).then(function(imageData) {
        vm.travel.imgs.push("data:image/jpeg;base64," + imageData);
      }, HandlerService.callbackError);
    }

    vm.saveTravel = function(form, travel) {
      if (form.$valid) {
        console.log("AOW");
      }
    }
  });
}());
