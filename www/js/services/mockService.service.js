var app = angular.module('pccApp.mockService.service', []);

app.factory('MyTravelsListMockService', function() {

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

app.factory('AllTravelsListMockService', function() {

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
    date: '10/01/2016',
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
    date: '10/01/2016',
    image: 'img/travelMock1.jpg',
    rank: 5
  }];
});
