(function() {
  'use strict';

  var app = angular.module('pccApp.cameraService.service', []);

  app.factory('CameraService', function($cordovaCamera) {
    return {
      getPictureOptions: getPictureOptions
    };

    function getPictureOptions(sourceType) {
      return {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 50,
        targetHeight: 50,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: true,
        correctOrientation: true
      };
    };
  });
}());
