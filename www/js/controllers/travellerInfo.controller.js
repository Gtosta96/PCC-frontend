(function() {
  'use strict';

  var app = angular.module('pccApp.travellerInfo.controller', []);

  app.controller('TravellerInfoCtrl', function($scope) {
		$scope.$on('$ionicView.beforeEnter', function(event, viewData) {
      viewData.enableBack = true;
    });
  });
}());
