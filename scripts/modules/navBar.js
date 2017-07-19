angular.module("navBar",["router"])

angular.module("navBar").directive("navBa", function(){
    return{
        restrict:'E',
        templateUrl:'templates/navbar.html'
    }
})
