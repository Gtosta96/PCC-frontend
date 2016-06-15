var app = angular.module('pccApp.routes', [
  'pccApp.allTravels.controller',
  'pccApp.homePage.controller',
  'pccApp.login.controller',
  'pccApp.myTravels.controller',
  'pccApp.options.controller',
  'pccApp.signUp.controller',
  'pccApp.travelInfo.controller',
  'pccApp.travellerInfo.controller',
]);

app.config(function($stateProvider, $urlRouterProvider) {

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
      'tab-ranking-myTravelsRank': {
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
      'tab-ranking-allTravelsRank': {
        templateUrl: 'templates/allTravelsRank.html',
        controller: 'AllTravelsCtrl',
        controllerAs: 'vm',
        onEnter: checkUser
      }
    }
  });

  $stateProvider.state('tab.travelInfo', {
    url: '/travelInfo/:id',
    views: {
        'tab-homePage': {
            templateUrl: 'templates/travelInfo.html',
        }
    },
    controller: 'TravelInfoCtrl',
    controllerAs: 'vm',
		onEnter: checkUser
  });

  $stateProvider.state('travellerInfo', {
    url: '/travellerInfo/:id',
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
