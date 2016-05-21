(function() {
  'use strict';

  var app = angular.module('pccApp.loginService.service', []);

  app.factory('LoginService', function($rootScope, CookiesService, HandlerService) {
    return {
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn,
    };

    function login(user, loggedFromFacebook) {

      user = HandlerService.parseUserFromFacebook(user, loggedFromFacebook);

      CookiesService.setUser(user);
      this.isLoggedIn();
      HandlerService.go('tab.homePage');
    }

    function logout() {
      CookiesService.removeUser();
      this.isLoggedIn();
      HandlerService.go('login');
    }

    function isLoggedIn() {
      return $rootScope.isLoggedIn = CookiesService.getUser() ? true : false;
    }
  });
}());
