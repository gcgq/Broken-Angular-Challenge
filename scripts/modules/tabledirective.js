angular.module("tableDirective", [])

angular.module("tableDirective").directive("tableDirective", function(){
    return{
        restrict:'E',
        templateUrl:'templates/table.html'
    }
})
