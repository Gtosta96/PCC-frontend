var app = angular.module('pccApp.infiniteScroll.directive', []);

app.directive("infiniteScroll", function() {
  return {
    restrict: "E",
    scope: {
      url: "@"
    },
    link: function(scope, element, attributes) {

      scope.moreDataCanBeLoaded = function() {

      };

      scope.loadMoreData = function() {

      };
    },
      templateUrl: "/templates/util/directives/infiniteScroll.directive.html"
  };
});
