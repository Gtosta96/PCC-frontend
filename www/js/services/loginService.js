var app = angular.module('pccApp.services.loginService', []);

app.factory('LoginService', function($rootScope, CookiesService, HandlerService) {
  return {
    login: login,
    logout: logout,
    isLoggedIn: isLoggedIn,
  };

  function login(user) {
    CookiesService.setUser(user);
		$rootScope.isLoggedIn = true;
    HandlerService.go('homePage');
  }

  function logout() {
    CookiesService.removeUser();
    $rootScope.isLoggedIn = false;
    HandlerService.go('login');
  }

  function isLoggedIn() {
    var user = CookiesService.getUser();

    if (typeof user === "object") {
      return true;
    }
    return false;
  }
});
