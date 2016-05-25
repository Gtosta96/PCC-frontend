(function() {
  'use strict';

  var app = angular.module('pccApp.restService.service', [
    'ngResource',
    'pccApp.cookiesService.service'
  ]);

  app.factory('LoginAuthRestService', function($resource, SERVER_URL) {
    return $resource(SERVER_URL + "PCC-backend/loginAuth", {
      data: '@data'
    });
  });

  app.factory('SignUpRestService', function($resource, SERVER_URL) {
    return $resource(SERVER_URL + "PCC-backend/signUp", {
      data: '@data'
    });
  });

  app.factory('SaveTravelRestService', function($resource, SERVER_URL) {
    return $resource(SERVER_URL + "PCC-backend/saveTravel/:userId", {
      data: '@data',
    });
  });

  app.factory('MyTravelsListRestService', function($resource, CookiesService, SERVER_URL) {
    return $resource(SERVER_URL + "PCC-backend/myTravelsList/:userId", {
      userId: CookiesService.getUser().id
    });
  });

  app.factory('AllTravelsListRestService', function($resource, SERVER_URL) {
    return $resource(SERVER_URL + "PCC-backend/allTravelsList");
  });

  app.factory('TravelInfoRestService', function($resource, CookiesService, SERVER_URL) {
    return $resource(SERVER_URL + "PCC-backend/travelInfo/:travelId", {
      travelId: '@data'
    });
  });

  app.factory('TravellerInfoRestService', function($resource, SERVER_URL) {
    return $resource(SERVER_URL + "PCC-backend/travellerInfo/:travellerId", {
      travellerId: '@data'
    });
  });
}());
