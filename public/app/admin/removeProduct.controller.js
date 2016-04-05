(function(){
    
    var app = angular.module('zorgApp');
    
    app.controller('removeProductCtrl', function($scope, removeProductService, products){
        
        $scope.reset = function(){
            $scope.id = {};
        };
        
        $scope.products = products;
        
        $scope.removeProd = function(id){
            
            removeProductService.removeProduct(id);
            
            $scope.reset();
        };
        
        
    });
    
}());



