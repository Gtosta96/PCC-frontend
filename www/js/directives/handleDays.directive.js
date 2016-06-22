var app = angular.module('pccApp.handleDays.directive', []);

app.directive("handleDays", function() {
  return {
    restrict: 'E',
    scope: {
      form: '=form',
			startDate: '=startDate',
			endDate: '=endDate',
			setDaysCallback: '&setDaysCallback'
    },
    link: function(scope, element, attributes) {
      scope.$watch(function watchForm() {
        return scope.form.$valid && !scope.form.$pristine;
      }, function handleWatchedForm(newValue, oldValue) {
        if (newValue) {
          var startDate = scope.startDate;
          var endDate = scope.endDate;

          var days = [];
          var auxDate = startDate;
          while (auxDate.getTime() <= endDate.getTime()) {
            days.push(auxDate);
            auxDate = new Date(auxDate.getTime() + 86400000);
          }
          scope.setDaysCallback({days: days});
        }
      });
    }
  };
});
