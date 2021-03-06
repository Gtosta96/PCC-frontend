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

  app.factory('SaveTravelRestService', function($resource, CookiesService, SERVER_URL) {
    return $resource(SERVER_URL + "PCC-backend/saveTravel/:userId", {
      data: '@data',
			userId: CookiesService.getUser().id
    });
  });

	app.factory('DeleteTravelRestService', function($resource, SERVER_URL) {
    return $resource(SERVER_URL + "PCC-backend/deleteTravel/:travelId", {
      travelId: '@data'
    });
  });

  app.factory('TravelsListRestService', function($resource, SERVER_URL) {
    return $resource(SERVER_URL + "PCC-backend/travelsList/:userId/:pagination");
    data: '@data'
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
