var app = angular.module('Lipapp', []);
var url = "http://makeup-api.herokuapp.com/api/v1/products.json?product_category=lipstick&product_type=lipstick";
app.controller('LipController', function($scope, $http, $timeout) {
    $http.get(url).then(function(response) {
        $scope.datalip = response.data;
    });
    $scope.getRowClass = function(index) {
        if (index % 3 == 0) {
            return "row hidden-sm";
        }
    };
    $scope.arr = [];
    var sum = 0;
    $scope.show = function(ID, Brand, Name, Price) {
        $scope.mylist = true;
        $scope.lipstick = false;
        sum = sum + parseFloat(Price);
        $scope.Totals = sum;
        $scope.data = {
            Id: ID,
            Brand: Brand,
            Name: Name,
            Price: Price,
        };
        $scope.arr.push({
            'id': $scope.data.Id,
            'brand': $scope.data.Brand,
            'name': $scope.data.Name,
            'price': $scope.data.Price
        });
    };
});