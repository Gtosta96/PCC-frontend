var app = angular.module('pccApp.cameraService.service', []);

app.factory('CameraService', function($q) {
  return {
    getOptions: getCameraOptions,
    getPicture: getPicture
  };

  function getCameraOptions(sourceType) {
    return {
      quality: 100,
      targetWidth: 50,
      targetHeight: 50,
      sourceType: sourceType,
      destinationType: Camera.DestinationType.FILE_URI,
      allowEdit : true
    }
  };

  function getPicture(options) {
    var q = $q.defer();

    navigator.camera.getPicture(function(result) {
      q.resolve(result);
    }, function(err) {
      q.reject(err);
    }, options);

    return q.promise;
  }
});
