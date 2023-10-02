var app = angular.module('myApp', []);

app.controller('MyController', function($scope) {
    $scope.searchQuery = '';
    $scope.searchResult = '';

    $scope.searchOnEnter = function(event) {
        if (event.keyCode === 13) {
            $scope.searchResult = 'Searching for: ' + $scope.searchQuery;
        }
    };
});
