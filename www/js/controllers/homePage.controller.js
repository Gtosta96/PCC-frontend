(function() {
  'use strict';

  var app = angular.module('pccApp.homePage.controller', [
    'pccApp.handlerService.service',
    'pccApp.restService.service',
    'pccApp.cookiesService.service',
    'ion-datetime-picker',
    'ionic-ratings',
    'ngCordova'
  ]);

  app.controller('HomePageCtrl', function($cordovaCamera, HandlerService, SaveTravelRestService, CookiesService) {

    var vm = this;
    vm.travel = {};
    vm.travel.resources = [];
    vm.travel.comments = [];
		vm.infiniteScroll = {};

    //TODO: Mover para diretiva
		vm.travel.rank = 3;
    vm.setRankCallback = {
      iconOn: 'ion-ios-star',
      iconOff: 'ion-ios-star-outline',
      iconOnColor: '#FFC900',
      iconOffColor:  '#DDD',
      rating:  3,
      minRating: 1,
      callback: function(data) {
        vm.travel.rank = data;
      }
    }
    vm.setTravelsCallback = function(data) {
      vm.infiniteScroll.travels = data;
    };

		vm.setDaysCallback = function(days) {
			vm.travel.days = days;
		};

    vm.importPicture = function() {
      var options = getPictureOptions(0);
      $cordovaCamera.getPicture(options).then(function(imageData) {
        vm.travel.resources.push(imageData);
      }, HandlerService.callbackError);
    }

    vm.takePicture = function() {
      var options = getPictureOptions(1);
      $cordovaCamera.getPicture(options).then(function(imageData) {
        vm.travel.resources.push(imageData);
      }, HandlerService.callbackError);
    }

    vm.saveTravel = function(travel) {
			travel.isFacebookUser = CookiesService.getUser().isFacebookUser;
      SaveTravelRestService.save(travel).$promise.then(function(success) {
				HandlerService.popupInfo({
					title: "Viagem Salva",
					template: "Sua viagem foi salva com sucesso!"
				});
				vm.travel = {};
      }, HandlerService.callbackError);
    }

		function getPictureOptions(sourceType) {
			return {
				quality: 75,
				destinationType: 0,
				sourceType: sourceType,
				allowEdit: true,
				encodingType: 0,
				targetWidth: 500,
				targetHeight: 300,
				saveToPhotoAlbum: true,
				correctOrientation: true
			}
		}
  });
}());
