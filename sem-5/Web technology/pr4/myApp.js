var app = angular.module('myApp', []);

app.controller('ShoppingListController', function ($scope) {
    $scope.items = [];
    $scope.newItem = '';

    $scope.addItem = function () {
        if ($scope.newItem.trim() !== '') {
            $scope.items.push($scope.newItem);
            $scope.newItem = '';
        }
    };

    $scope.removeItem = function (index) {
        $scope.items.splice(index, 1);
    };
});
