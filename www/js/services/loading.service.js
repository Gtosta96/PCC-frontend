(function() {
  'use strict';

  var app = angular.module('pccApp.loadingService.service', []);

  app.factory('LoadingService', function($ionicLoading) {
    return {
      show: show,
      hide: hide
    };

    function show() {
      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });
    };

    function hide() {
      $ionicLoading.hide();
    }
  });
}());
