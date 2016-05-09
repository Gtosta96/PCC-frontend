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
    traveller: {
      id: 10,
      firstName: 'Gabriel',
      lastName: 'Tosta'
    },
    destination: 'Disney',
    date: '10/03/2015',
    image: 'img/travelMock1.jpg',
    rank: 5
  }, {
    id: 2,
    traveller: {
      id: 15,
      firstName: 'Juan',
      lastName: 'Leme'
    },
    destination: 'Dubai',
    date: '25/04/2010',
    image: 'img/travelMock2.jpg',
    rank: 3
  }, {
    id: 3,
    traveller: {
      id: 20,
      firstName: 'Danilo',
      lastName: 'Moraes'
    },
    destination: 'Egito',
    date: '10/01/2016',
    image: 'img/travelMock3.jpg',
    rank: 1
  }, {
    id: 4,
    traveller: {
      id: 25,
      firstName: 'Jonathas',
      lastName: 'Rodrigues'
    },
    destination: 'Egito2',
    date: '10/01/20162',
    image: 'img/travelMock3.jpg',
    rank: 2
  }, {
    id: 5,
    traveller: {
      id: 30,
      firstName: 'João',
      lastName: 'Gatto'
    },
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

app.factory('TravellerInfoService', function() {
  //return $resource("http://localhost:8080/PCC-backend/travellerInfo/:travellerId", {travellerId : '@data'});

  return null;
});
