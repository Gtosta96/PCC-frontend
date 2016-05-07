var app = angular.module('pccApp.services.userService', ['ngResource']);

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

  //return $resource("http://localhost:8080/PCC-backend/myTravelsList/:userId", {userId : '@data'});

  //MOCK
  return [{
    id: 1,
    destination: 'Disney',
    date: '10/03/2015',
    image: 'img/travelMock1.jpg',
    rank: 5
  }, {
    id: 2,
    destination: 'Dubai',
    date: '25/04/2010',
    image: 'img/travelMock2.jpg',
    rank: 3
  }, {
    id: 3,
    destination: 'Egito',
    date: '10/01/2016',
    image: 'img/travelMock3.jpg',
    rank: 2
  }];
});

app.factory('AllTravelsListService', function() {

  //return $resource("http://localhost:8080/PCC-backend/allTravelsList");
  //MOCK
  return [{
    id: 1,
    destination: 'Disney',
    date: '10/03/2015',
    image: 'img/travelMock1.jpg',
    rank: 5
  }, {
    id: 2,
    destination: 'Dubai',
    date: '25/04/2010',
    image: 'img/travelMock2.jpg',
    rank: 3
  }, {
    id: 3,
    destination: 'Egito',
    date: '10/01/2016',
    image: 'img/travelMock3.jpg',
    rank: 1
  }, {
    id: 4,
    destination: 'Egito2',
    date: '10/01/20162',
    image: 'img/travelMock3.jpg',
    rank: 2
  }, {
    id: 5,
    destination: 'Egito3',
    date: '10/01/201262',
    image: 'img/travelMock1.jpg',
    rank: 5
  }];
});

app.factory('TravelInfoService', function() {
  //return $resource("http://localhost:8080/PCC-backend/travelInfo/:travelId", {travelId : '@data'});

  return null;
});
