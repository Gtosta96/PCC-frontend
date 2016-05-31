var app = angular.module('pccApp.tpInfiniteScroll.directive', []);

app.directive("tpInfiniteScroll", function($injector) {
  return {
    restrict: "E",
    scope: {
      restService: "@",
      setDataCallback: "&setDataCallback"
    },
    link: function(scope) {
      var data = [];
      var service = $injector.get(scope.restService);

      var requestListTravels = {pag: 1, len: 5};
      scope.moreDataCanBeLoaded = true;

      scope.loadMoreData = function() {
          service.query(requestListTravels).$promise.then(function(response) {
            if(response.length) {
              for(var i = 0; i < response.length; i++) {
                data.push(response[i]);
              }
              scope.setDataCallback({data: data});
              requestListTravels.pag++;
              scope.$broadcast('scroll.infiniteScrollComplete');
            } else {
              scope.moreDataCanBeLoaded = false;
            }
          });
      }
    },
      templateUrl: "/templates/util/directives/tpInfiniteScroll.directive.html"
  };
});
