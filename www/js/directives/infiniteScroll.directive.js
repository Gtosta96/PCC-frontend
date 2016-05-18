var app = angular.module('pccApp.infiniteScroll.directive', []);

app.directive("infiniteScroll", function() {
  return {
    restrict: "E",
    scope: {
      url: "=url"
    },
    link: function(scope, element, attributes) {
      var vm = this;

      vm.moreDataCanBeLoaded = function(){};

      vm.loadMoreData = function(){};

    },
      templateUrl: "/templates/util/directives/infiniteScroll.directive.html"
  };
});
