(function(){
    
   var app = angular.module('zorgApp'); 
   
   app.controller('addProductCtrl', function($scope, addProductService){
       
       $scope.productObj = {};
       
       $scope.reset = function() {
            //Clear form fields
           $scope.name = "";
           $scope.description = "";
           $scope.features = "";
           $scope.quantity = "";
           $scope.price = "";
           $scope.photoSrc = "";
       };
       
       $scope.createProduct = function(name, description, features, quantity, price, photoSrc, inStock){
           
           //Build product object
           $scope.productObj.name = name;
           $scope.productObj.description = description;
           $scope.productObj.features = features;
           $scope.productObj.quantity = quantity;
           $scope.productObj.price = price;
           $scope.productObj.photoSrc = photoSrc;
           $scope.productObj.inStock = inStock;
           
           console.log($scope.productObj);
           
          $scope.reset();
           
       };
       
   });
    
    
    
}());

