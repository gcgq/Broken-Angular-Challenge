var router =angular.module("router",['ngRoute'])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	//$locationProvider.html5Mode(true);
    $routeProvider.when("/", {
		templateUrl: "templates/main.html"
    }).when("/page1", {
		templateUrl: "templates/page1.html"
    }).when("/contact", {
		templateUrl: "templates/contact.html",
		controller: function(){
		}
    });
}]);