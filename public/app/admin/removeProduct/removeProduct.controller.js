(function(){
    
    var app = angular.module('zorgApp');
    
    app.controller('removeProductCtrl', function($scope, removeProductService, products){
        
        $scope.products = products;
        
        console.log($scope.products);
        
        
        //If product is one of the three permanently displayed products the 
        //Delete button is disabled. 
        $scope.checkName = function(id){
            
            var currentProduct = {};
            
            $scope.products.forEach(function(prodObj, i){
                for(var key in prodObj){
                    if(prodObj[key] === id) {
                        currentProduct = prodObj;
                    }
                }
            });
            
            if(currentProduct.name === "Zorg ZF-1 Pod Weapon" 
                    || currentProduct.name === "Vektor CP1"
                    || currentProduct.name === "ZF-LE44"){
                return true;
            }
            return false;
        };
        
        //Send delete request to service by product id
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



