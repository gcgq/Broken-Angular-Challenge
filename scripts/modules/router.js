var router = angular.module("router", ['ngRoute'])

    router.config([ '$routeProvider', '$locationProvider', function($routeProvider,
$locationProvider) {
        //$locationProvider.html5Mode(true);
        $routeProvider.when("/", {
            templateUrl: "templates/main.html",
            controller: function () {
                initialize = function () {
                    var uluru = {
                        lat: -25.363,
                        lng: 131.044
                    };
                    var element = document.getElementById('map')
                    var map = new google.maps.Map(element, {
                        zoom: 4,
                        center: uluru
                    });
                    var marker = new google.maps.Marker({
                        position: uluru,
                        map: map
                    });
                }
            }
        }).when("/page1", {
            templateUrl: "templates/page1.html"
        }).when("/contact", {
            templateUrl: "templates/contact.html",
            controller: function () {}
        });
}]);
