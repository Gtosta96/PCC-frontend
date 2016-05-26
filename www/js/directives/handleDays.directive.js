var app = angular.module('pccApp.handleDays.directive', []);

app.directive("handleDays", function() {
  return {
    restrict: 'E',
    controller: 'HomePageCtrl',
    controllerAs: 'vm',
    bindToController:true,
    scope: {
      form: '='
    },
    link: function(scope, element, attributes) {
      scope.$watch(function watchForm() {
        return scope.vm.form.$valid && !scope.vm.form.$pristine;
      }, function handleWatchedForm(newValue, oldValue) {
        if (newValue) {
          var startDate = scope.vm.form.startDate.$modelValue;
          var endDate = scope.vm.form.endDate.$modelValue;

          var days = [];
          var auxDate = startDate;
          while (auxDate.getTime() <= endDate.getTime()) {
            days.push(auxDate);
            auxDate = new Date(auxDate.getTime() + 86400000);
          }
          vm.travel.days = days;
        }
      });
    }
  };
});
