(function(){
    
    var app = angular.module('zorgApp');
    
    app.controller('oneProductCtrl', function($scope, $state, product){
        
        $scope.product = product[0];
        
        $scope.totalCost = 0;
        
        $scope.stockVer = "is not";
        
        if($scope.product.inStock){
            $scope.stockVer = "is";
            $scope.enabledField = true;
        };
        
        $scope.placeOrder = function(){
            
            if(!$scope.product.inStock){
                alert("We're sorry, that product is out of stock.");
            }
            
        };

        
    });
    
}());

