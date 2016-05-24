(function() {
  'use strict';

  var app = angular.module('pccApp.restService.service', [
    'ngResource',
    'pccApp.cookiesService.service'
  ]);

  app.factory('LoginAuthRestService', function($resource) {
    return $resource("http://localhost:8080/PCC-backend/loginAuth", {
      data: '@data'
    });
  });

  app.factory('SignUpRestService', function($resource) {
    return $resource("http://localhost:8080/PCC-backend/signUp", {
      data: '@data'
    });
  });

  app.factory('SaveTravelRestService', function($resource, CookiesService) {
    return $resource("http://localhost:8080/PCC-backend/saveTravel/:userId", {
      userId: CookiesService.getUser().id,
      data: '@data'
    });
  });

  app.factory('MyTravelsListRestService', function($resource, CookiesService) {
    return $resource("http://localhost:8080/PCC-backend/myTravelsList/:userId", {
      userId: CookiesService.getUser().id
    });
  });

  app.factory('AllTravelsListRestService', function($resource) {
    return $resource("http://localhost:8080/PCC-backend/allTravelsList");
  });

  app.factory('TravelInfoRestService', function($resource, CookiesService) {
    return $resource("http://localhost:8080/PCC-backend/travelInfo/:travelId", {
      travelId: '@data'
    });
  });

  app.factory('TravellerInfoRestService', function($resource) {
    return $resource("http://localhost:8080/PCC-backend/travellerInfo/:travellerId", {
      travellerId: '@data'
    });
  });
}());
