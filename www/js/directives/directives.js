var app = angular.module('pccApp.directives', []);

app.directive("errorTemplates", function() {
	return {
		restrict: "E",
		templateUrl: "/templates/util/directives/errorTemplates.html"
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
		templateUrl: "/templates/util/directives/displayMessage.html"
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
            	if ((modelValue && modelValue != "") && (scope.otherModelValue && scope.otherModelValue != "")) {
            		return modelValue == scope.otherModelValue;
            	} else {
            		return false;
            	}
            };
 
            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
});

app.directive("setActiveTab", function() {
	return {
		restrict: "A",
		link: function(scope, element, attributes) {
			var aElements = element.find('a');
			aElements.on('click', function() {
				var _this = angular.element(this);
				aElements.removeClass('active');
				_this.addClass('active');
			});
		}
	}
});

app.directive("checkUser", function($rootScope, CookiesService) {
	return {
		restrict: "A",
		link: function() {
			$rootScope.isLoggedIn = CookiesService.isLoggedIn();
		}
	}
});