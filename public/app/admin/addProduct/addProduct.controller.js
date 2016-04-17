(function(){
    
   var app = angular.module('zorgApp'); 
   
   app.controller('addProductCtrl', function($scope, $uibModal, addProductService){
       
       //Clear form fields when new product submitted
       $scope.reset = function() {
           $scope.name = "";
           $scope.description = "";
           $scope.features = "";
           $scope.quantity = "";
           $scope.price = "";
           $scope.photoSrc = "";
       };      
        
        //Open Modal instance
        var open = function(posted, productObj){
            
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: 'sm',
                resolve: {
                    prodName: function () {
                        return productObj.name;
                    },
                    status: function() {
                        return posted;
                    }
                }
            });
        };
        
       
       //Build product object and submit to service
       $scope.createProduct = function(name, description, features, quantity, price, photoSrc, inStock){

            //Status of $http POST result
            var posted = null;
            
            //Build product object
            var productObj = {
                name: name,
                description: description,
                features: features,
                quantity: quantity,
                price: price,
                photoSrc: photoSrc,
                inStock: inStock
            };
           
           //Submit product to service
           addProductService.addProduct(productObj)
                   .then(function(result){
                        posted = true;
                        //open modal with success message
                        open(posted, productObj);
           }, function(result){
                        posted = false;
                        //open modal with failure message
                        open(posted, productObj);
           });

           //Clean up form fields
           $scope.reset();
 
       };
   });
       
}());

