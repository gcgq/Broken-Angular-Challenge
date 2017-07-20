var app = angular.module("challengeApp", ["navBar", "tableDirective"])

app.controller("mainCtrl", function($scope) {
    $scope.model = 5
})
