var app = angular.module('pccApp.directives', []);

app.directive("errorTemplates", function(){
	return {
		restrict: "E",
		templateUrl: "/templates/util/directives/errorTemplates.html"
	}
})

app.directive("errorMessage", function(){
	return {
		restrict: "A",
		scope: {
			'field': '@'
		},
		templateUrl: "/templates/util/directives/errorMessage.html"
	}
});