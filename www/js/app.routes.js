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
    controllerAs: 'vm',
    onEnter: function($state, LoginService) {
      if (LoginService.isLoggedIn()) {
        $state.go('tab.homePage');
      }
    }
  });

  $stateProvider.state('signUp', {
    url: '/signUp',
    templateUrl: 'templates/signUp.html',
    controller: 'SignUpCtrl',
    controllerAs: 'vm'
  });

  $stateProvider.state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  });

  $stateProvider.state('tab.homePage', {
    url: '/homePage',
    views: {
      'tab-homePage': {
        templateUrl: 'templates/homePage.html',
        controller: 'HomePageCtrl',
        controllerAs: 'vm'
      }
    }
  });

  $stateProvider.state('tab.options', {
    url: '/options',
    views: {
      'tab-options': {
        templateUrl: 'templates/options.html',
        controller: 'optionsCtrl',
        controllerAs: 'vm'
      }
    }
  });

  $stateProvider.state('tab.ranking', {
    url: '/ranking',
    views: {
      'tab-ranking': {
        templateUrl: 'templates/tabsRanking.html'
      }
    }
  });

  $stateProvider.state('tab.ranking.myTravelsRank', {
    url: '/myTravelsRank',
    views: {
      'ranking-myTravelsRank': {
        templateUrl: 'templates/myTravelsRank.html',
        controller: 'MyTravelsCtrl',
        controllerAs: 'vm',
        onEnter: checkUser
      },
    }
  });

  $stateProvider.state('tab.ranking.allTravelsRank', {
    url: '/allTravelsRank',
    views: {
      'ranking-allTravelsRank': {
        templateUrl: 'templates/allTravelsRank.html',
        controller: 'AllTravelsCtrl',
        controllerAs: 'vm',
        onEnter: checkUser
      }
    }
  });

  $stateProvider.state('travelInfo', {
    url: '/travelInfo?:id',
    templateUrl: 'templates/travelInfo.html',
    controller: 'TravelInfoCtrl',
    controllerAs: 'vm'

  });

  $stateProvider.state('travellerInfo', {
    url: '/travellerInfo?:id',
    templateUrl: 'templates/travellerInfo.html',
    controller: 'TravellerInfoCtrl',
    controllerAs: 'vm',
    onEnter: checkUser
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});

function checkUser($state, LoginService) {
  if (!LoginService.isLoggedIn()) {
    $state.go('login');
  }
}
