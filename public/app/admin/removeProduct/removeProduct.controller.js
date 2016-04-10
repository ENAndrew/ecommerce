(function(){
    
    var app = angular.module('zorgApp');
    
    app.controller('removeProductCtrl', function($scope, removeProductService, products){

        
        $scope.products = products;
        
        console.log($scope.products);
        
        $scope.removeProd = function(id){
            
            removeProductService.removeProduct(id);
            
            //remove product from current view
            $scope.products.forEach(function(prodObj, i){
                
                for(var key in prodObj){
                    if(prodObj[key] === id){
                        $scope.products.splice(i, 1);
                    };
                }; 
            });

        };
        
        
    });
    
}());



