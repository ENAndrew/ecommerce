(function(){
    
    var app = angular.module('zorgApp');
    
    app.controller('oneProductCtrl', function($scope, $state, $uibModal, product, oneProductService){
        
        //Retrieve all product for this product information from resolve
        $scope.product = product[0];
        
        
        //Comments will refresh from database when view refreshes
        $scope.prodComments = [];
        $scope.prodComments = $scope.product.comments;
        
        
        //Initial variable for calculation of cost in view
        $scope.totalCost = 0;
        
        //Initiate alert assuming item is not in stock
        $scope.stockVer = "is not";
        if($scope.product.inStock){
            $scope.stockVer = "is";
        };
        
         //Open Modal instance
        var open = function(){
            
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                controller: 'oneProdModalInstanceCtrl',
                size: 'sm',
                resolve: {
                    prodName: function () {
                        return $scope.product.name;
                    }
                }
            });
        };
        
        //If product is not in stock, show modal alert. (Will also handle service request for orders)
        $scope.placeOrder = function(){
            if(!$scope.product.inStock){
                open();
            }
        };
        
        //Send comment as embedded object to product object in collection via service
        $scope.sendComment = function(userName, comment){
            
            var commentObj = {
                user: userName,
                comment: comment
            };
            
            var id = $scope.product._id;
            
            //updates current $scope with new comment, on page reload all comments are
            //obtained from the collection
            $scope.prodComments.push(commentObj);


            oneProductService.updateComment(commentObj, id);
            
            //Clear comment entry fields
            $scope.comment = "";
            $scope.userName = "";
            
        };
     
    });
    
}());

