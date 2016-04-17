(function(){
    
    var app = angular.module('zorgApp');
    
    app.controller('removeProductCtrl', function($scope, removeProductService, products){
        
        
        $scope.products = products;
        
        //If product is one of the three permanently displayed products the 
        //Delete button is disabled. 
        $scope.checkName = function(name){
            
            if(name === "Zorg ZF-1 Pod Weapon" 
                    || name === "Vektor CP1"
                    || name === "ZF-LE44"){
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



