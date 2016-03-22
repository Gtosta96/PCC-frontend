var app = angular.module('pccApp.directives', []);

app.directive("errorTemplates", function(){
	return {
		restrict: "E",
		templateUrl: "/templates/util/directives/errorTemplates.html"
	}
});            

app.directive("displayMessage", function(){
	return {
		restrict: "E",
		scope: {
			form: '=',
			attribute: '@',
			display: '@',
			message: '@'
		},
		templateUrl: "/templates/util/directives/displayMessage.html"
	}
});

app.directive("compareTo", function() {
    return {
        require: "ngModel",
        scope: {
            "otherModelValue": "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
});