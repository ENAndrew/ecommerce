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
       
       
       //Initiate with data 'not' posting successfully to database
       $scope.posted = null;
       
       //Enable animations for Modal
        $scope.animationsEnabled = true;
        
        
        //Open Modal instance
        var open = function(posted){
            
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
                        return posted;
                    }
                }
            });
        };
        
        //For Modal animation
        $scope.toggleAnimation = function() {
          $scope.animationsEnabled = !$scope.animationsEnabled;
        };
       
       //Build product object and submit to service
       $scope.createProduct = function(name, description, features, quantity, price, photoSrc, inStock){

            //Status of $http POST result
            var posted = null;

           //Build product object
           $scope.productObj.name = name;
           $scope.productObj.description = description;
           $scope.productObj.features = features;
           $scope.productObj.quantity = quantity;
           $scope.productObj.price = price;
           $scope.productObj.photoSrc = photoSrc;
           $scope.productObj.inStock = inStock;
           
           //Submit product to service
           addProductService.addProduct($scope.productObj)
                   .then(function(result){
                        posted = true;
                        //open modal with success message
                        open(posted);
           }, function(result){
                        posted = false;
                        //open modal with failure message
                        open(posted);
           });

           //Clean up form fields
           $scope.reset();
 
       };
   });
       
}());

