var app = angular.module('pccApp.directives', []);

app.directive("errorMessage", function(){
	return {
		restrict: "A",
		templateUrl: "/templates/util/directives/errorMessage.html"
	}
})