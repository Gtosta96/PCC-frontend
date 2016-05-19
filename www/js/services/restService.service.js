var app = angular.module('pccApp.restService.service', ['ngResource']);

app.factory('LoginAuthService', function($resource) {
  return $resource("http://localhost:8080/PCC-backend/loginAuth", {
    data: '@data'
  });
});

app.factory('SignUpService', function($resource) {
  return $resource("http://localhost:8080/PCC-backend/signUp", {
    data: '@data'
  });
});

app.factory('MyTravelsListService', function() {
  return $resource("http://localhost:8080/PCC-backend/myTravelsList/:userId", {userId : '@data'});
});

app.factory('AllTravelsListService', function() {
  return $resource("http://localhost:8080/PCC-backend/allTravelsList");
});

app.factory('TravelInfoService', function() {
  return $resource("http://localhost:8080/PCC-backend/travelInfo/:travelId", {travelId : '@data'});
});

app.factory('TravellerInfoService', function() {
  return $resource("http://localhost:8080/PCC-backend/travellerInfo/:travellerId", {travellerId : '@data'});
});
