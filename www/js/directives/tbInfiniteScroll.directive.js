var app = angular.module('pccApp.tbInfiniteScroll.directive', []);

app.directive("tbInfiniteScroll", function($injector, $timeout) {
  return {
    restrict: "E",
    scope: {
      restService: "@",
			userId: "=",
      setDataCallback: "&setDataCallback"
    },
    link: function(scope) {
      var data = [];
      var service = $injector.get(scope.restService);

			var request = {
				id: scope.userId || null,
				limit: 5,
				offset: 0
			};

      scope.moreDataCanBeLoaded = true;

      scope.loadMoreData = function() {
          service.query(request).$promise.then(function(response) {
            if(response.length) {
              for(var i = 0; i < response.length; i++) {
                data.push(response[i]);
              }
              scope.setDataCallback({data: data});
              request.offset ++;
              scope.$broadcast('scroll.infiniteScrollComplete');
            } else {
              scope.moreDataCanBeLoaded = false;

							$timeout(function() {
					    	scope.moreDataCanBeLoaded = true;
					    }, 5000);
            }
          });
      }
    },
      templateUrl: "/templates/util/directives/tbInfiniteScroll.directive.html"
  };
});
