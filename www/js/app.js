// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'pccApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'pccApp.controllers' is found in controllers.js
// 'pccApp.routes' is found in routes.js
var app = angular.module('pccApp', ['ionic', 'pccApp.controllers', 'pccApp.routes', 'pccApp.services']);

app.run(function($ionicPlatform) {
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
});

//Disable Text of last view on ion-nav-back-button.
app.config(function($ionicConfigProvider) {
	$ionicConfigProvider.backButton.previousTitleText(false).text('');
});