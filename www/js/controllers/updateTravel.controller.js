(function() {
  'use strict';

  var app = angular.module('pccApp.updateTravel.controller', []);

  app.controller('UpdateTravelCtrl', function($scope) {
		$scope.$on('$ionicView.beforeEnter', function(event, viewData) {
      viewData.enableBack = true;
    });
  });
}());
