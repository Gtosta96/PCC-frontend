var app = angular.module('pccApp.homePage.controller', []);

app.controller('HomePageCtrl', function($scope, HandlerService, CameraService) {

  var vm = this;
  vm.travel = {};
  vm.travel.imgs = [];

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
    var options = CameraService.getOptions(0);

    CameraService.getPicture(options).then(function(imageData) {
      vm.travel.imgs.push(imageData);
    }, HandlerService.callbackError);
  }

  vm.takePicture = function() {
    var options = CameraService.getOptions(1);

    CameraService.getPicture(options).then(function(imageData) {
      vm.travel.imgs.push(imageData);
    }, HandlerService.callbackError);
  }
});
