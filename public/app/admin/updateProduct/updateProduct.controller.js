(function(){
    
    var app = angular.module('zorgApp');
    
    app.controller('updateProductCtrl', function($scope, products, updateProductService){
        
        //Id of product selected to be edited
        var selectId = '';
        
        //Display all products captured from database
        $scope.products = products;
        
        //Product currently selected for editing
        $scope.selectProduct = {};
        
        //If product is one of the three permanently displayed products the 
        //Edit button is disabled. 
        $scope.checkName = function(name){
  
            if(name === "Zorg ZF-1 Pod Weapon" 
                    || name === "Vektor CP1"
                    || name === "ZF-LE44"){
                return true;
            }
            return false;
        };
        
        
        //Clear text fields and dropdown
        $scope.reset = function(){
            $scope.selectProduct = {};
            $scope.update = "";    
        };
        
        //Find the _id value of the select item via it's index
        $scope.getSelect = function($index){
            
            $scope.selectProduct = products[$index];
            
            selectId = products[$index]._id;
            
        };
        
        $scope.updateProd = function(selectedItem, update){
            
            //Build request body object
            var dataObj = {
                selectedItem: update
            };
            
            updateProductService.updateProduct(dataObj, selectId);
          
            $scope.reset();
            
        };
        
    });
    
}());


