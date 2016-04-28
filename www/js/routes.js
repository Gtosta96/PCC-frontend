var app = angular.module('pccApp.routes', []);

app.config(function($stateProvider, $urlRouterProvider) {
	
	  // Ionic uses AngularUI Router which uses the concept of states
	  // Learn more here: https://github.com/angular-ui/ui-router
	  // Set up the various states which the app can be in.
	  // Each state's controller can be found in controllers.js
	  // setup an abstract state for the tabs directive
	$stateProvider.state('login', {
	    url: '/login',
	    templateUrl: 'templates/login.html',
	    controller: 'LoginCtrl',
	    onEnter: function($state, CookiesService) {            
            if(CookiesService.isLoggedIn()) {
              $state.go('homePage');
            }
	    }
	});
	
	$stateProvider.state('signUp', {
	    url: '/signUp',
	    templateUrl: 'templates/signUp.html'
	  });
	
	$stateProvider.state('homePage', {
	    url: '/homePage',
	    templateUrl: 'templates/homePage.html'
	  });
	
	$stateProvider.state('xxx', {
	    url: '/xxx',
	    templateUrl: 'templates/guaruj.html'
	  });
	
	$stateProvider.state('options', {
	    url: '/options',
	    templateUrl: 'templates/options.html'
	  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});