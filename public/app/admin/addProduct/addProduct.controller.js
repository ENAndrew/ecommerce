(function(){
    
   var app = angular.module('zorgApp'); 
   
   app.controller('addProductCtrl', function($scope, $uibModal, addProductService){
       
       //Placeholder for new project object to be submitted to service
       $scope.productObj = {};
       
       //Clear form fields when new product submitted
       $scope.reset = function() {
           $scope.name = "";
           $scope.description = "";
           $scope.features = "";
           $scope.quantity = "";
           $scope.price = "";
           $scope.photoSrc = "";
       };
       
       //Enable animations for Modal
        $scope.animationsEnabled = true;
        
        
        //Open Modal instance
        var open = function () {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: 'sm',
                resolve: {
                    prodName: function () {
                        return $scope.productObj.name;
                    },
                    status: function() {
                       //this will need to get a potential error response from the 
                       //addProductService.addProduct() call
                    }
                }
            });
        };
        
        //For Modal animation
        $scope.toggleAnimation = function () {
          $scope.animationsEnabled = !$scope.animationsEnabled;
        };
       
       //Build product object and submit to service
       $scope.createProduct = function(name, description, features, quantity, price, photoSrc, inStock){
           
           //Build product object
           $scope.productObj.name = name;
           $scope.productObj.description = description;
           $scope.productObj.features = features;
           $scope.productObj.quantity = quantity;
           $scope.productObj.price = price;
           $scope.productObj.photoSrc = photoSrc;
           $scope.productObj.inStock = inStock;
           
           //Submit product to service
           addProductService.addProduct($scope.productObj);
           
           //Open Modal window
           open();
           
           //Clean up form fields
           $scope.reset();
 
       };
       
   });
       
}());

