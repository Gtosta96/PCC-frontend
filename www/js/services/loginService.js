var app = angular.module('pccApp.services.loginService', []);

app.factory('LoginService', function($rootScope, CookiesService, HandlerService) {
  return {
    login: login,
    logout: logout,
    isLoggedIn: isLoggedIn,
  };

  function login(user) {
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
      $rootScope.isLoggedIn = true;
      return true;
    }
    $rootScope.isLoggedIn = false;
    return false;
  }
});
