(function(){
    
    var app = angular.module('zorgApp');
    
    app.controller('updateProductCtrl', function($scope, products, updateProductService){
        
        var selectId = '';
        
        var dataObj = {};
        
        $scope.key = '';
        
        $scope.products = products;
        
        $scope.selectProduct = {};
        
        $scope.reset = function(){
            $scope.selectProduct = {};
            $scope.update = "";
            $scope.products = products;
            
        };
        
        
        $scope.getSelect = function($index){
            
            $scope.selectProduct = products[$index];
            
            selectId = products[$index]._id;
            
        };
        
        $scope.updateProd = function(selectedItem, update){
            
            //request body object
            dataObj[selectedItem] = update;
            
            updateProductService.updateProduct(dataObj, selectId);
          
            $scope.reset(); //needs to reset all fields and reload $scope.products.
            
        };
        
    });
    
}());


