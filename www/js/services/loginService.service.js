var app = angular.module('pccApp.loginService.service', []);

app.factory('LoginService', function($rootScope, CookiesService, HandlerService) {
  return {
    login: login,
    logout: logout,
    isLoggedIn: isLoggedIn,
  };

  function login(user, loggedFromFacebook) {

    if (loggedFromFacebook) {
      user = HandlerService.parseUserFromFacebook(user);
    }

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
    var user = CookiesService.getUser();

    if (typeof user === "object") {
      return $rootScope.isLoggedIn = true;
    }
    return $rootScope.isLoggedIn = false;
  }
});
