(function(){
    
    var app = angular.module('zorgApp');
    
    app.controller('allProductsCtrl', function($scope, products){
        
        $scope.products = products;
        
        console.log($scope.products);
        
    });
    
}());


