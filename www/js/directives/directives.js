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
			'form': '=',
			'attribute': '@',
			'display': '@'
		},
		templateUrl: "/templates/util/directives/displayMessage.html"
	}
});