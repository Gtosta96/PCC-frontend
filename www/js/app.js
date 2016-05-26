(function() {
  'use strict';

  var app = angular.module('pccApp', [
    'ionic',
    'pccApp.routes',
    'pccApp.constants',
    'pccApp.handleDays.directive',
    'pccApp.infiniteScroll.directive',
    'pccApp.validators.directive',
    'ngOpenFB',
    'ion-datetime-picker'
  ]);

  app.run(function($ionicPlatform, ngFB) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }

      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });

    //facebook integration
    var context = context = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/"));
    var baseURL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + context;
    ngFB.init({
      appId: '1747983272106145',
      oauthRedirectURL: baseURL + '/templates/util/ngFB/oauthcallback.html',
      logoutRedirectURL: baseURL + '/templates/util/ngFB/logoutcallback.html'
    });
  });

  app.config(function($ionicConfigProvider) {
    $ionicConfigProvider.backButton.previousTitleText(false).text('');
    $ionicConfigProvider.tabs.position('bottom');
  });
}());
