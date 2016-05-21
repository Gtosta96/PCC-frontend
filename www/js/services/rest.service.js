(function() {
  'use strict';

  var app = angular.module('pccApp.restService.service', ['ngResource']);

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

  app.factory('MyTravelsListRestService', function() {
    return $resource("http://localhost:8080/PCC-backend/myTravelsList/:userId", {
      userId: '@data'
    });
  });

  app.factory('AllTravelsListRestService', function() {
    return $resource("http://localhost:8080/PCC-backend/allTravelsList");
  });

  app.factory('TravelInfoRestService', function() {
    return $resource("http://localhost:8080/PCC-backend/travelInfo/:travelId", {
      travelId: '@data'
    });
  });

  app.factory('TravellerInfoRestService', function() {
    return $resource("http://localhost:8080/PCC-backend/travellerInfo/:travellerId", {
      travellerId: '@data'
    });
  });
}());
