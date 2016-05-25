var app = angular.module('pccApp.validators.directive', []);

app.directive("errorTemplates", function() {
  return {
    restrict: "E",
    templateUrl: "templates/util/directives/errorTemplates.directive.html"
  }
});

app.directive("displayMessage", function() {
  return {
    restrict: "E",
    scope: {
      form: '=',
      attribute: '@',
      display: '@',
      message: '@'
    },
    templateUrl: "templates/util/directives/displayMessage.directive.html"
  }
});

app.directive("compareTo", function() {
  return {
    require: "ngModel",
    scope: {
      otherModelValue: "=compareTo"
    },
    link: function(scope, element, attributes, ngModel) {
      ngModel.$validators.compareTo = function(modelValue) {
            if ((modelValue && modelValue.length > 0) && (scope.otherModelValue && scope.otherModelValue.length > 0)) {
              return modelValue == scope.otherModelValue;
            } else if ((modelValue && !(modelValue == "")) && (scope.otherModelValue && !(scope.otherModelValue == ""))) {
              return false;
            }
        },
        scope.$watch("otherModelValue", function() {
          ngModel.$validate();
        });
    }
  };
});
