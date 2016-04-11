(function(){

    var app = angular.module('zorgApp')
        
    app.controller('manageCommentsCtrl', function ($scope, products) {
        
        $scope.oneAtATime = true;

        $scope.products = products;



        
        });

}());

