(function() {
  'use strict';

  var app = angular.module('pccApp.cookiesService.service', ['ngCookies']);

  app.factory('CookiesService', function($cookies) {
    return {
      setUser: setUser,
      getUser: getUser,
      removeUser: removeUser,
    };

    function setUser(user) {
      return $cookies.putObject('user', user);
    }

    function getUser() {
      return $cookies.getObject('user');
    }

    function removeUser() {
      $cookies.remove('user');
    }
  });
}());
