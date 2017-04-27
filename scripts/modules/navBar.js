angular.module("navBar",["router"])

angular.module("navBar").directive("navBar", function(){
    return{
        restrict:'E',
        templateUrl:'templates/navbar.html'
    }
})