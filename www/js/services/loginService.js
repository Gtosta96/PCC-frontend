var app = angular.module('pccApp.services.loginService', []);

app.factory('LoginService', function($rootScope, CookiesService, HandlerService) {
  return {
    login: login,
    logout: logout,
    isLoggedIn: isLoggedIn,
  };

  function login(user, loggedFromFacebook) {

    if (loggedFromFacebook) {
      user = HandlerService.parseUserFromFacebook(user);
      console.log(user);
    }

    CookiesService.setUser(user);
    this.isLoggedIn();
    HandlerService.go('homePage');
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
