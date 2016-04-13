(function(){
    
    var app = angular.module('zorgApp');
    
    app.controller('oneProductCtrl', function($scope, $state, product, oneProductService){
        
        //Retrieve all product for this product information from resolve
        $scope.product = product[0];
        
        
        //Comments will refresh from database when view refreshes
        $scope.prodComments = [];
        $scope.prodComments = $scope.product.comments;
        
        
        //Initial variable for calculation of cost in view
        $scope.totalCost = 0;
        
        //Initiate alert assuming item is not in stock (will need to change to modal)
        $scope.stockVer = "is not";
        if($scope.product.inStock){
            $scope.stockVer = "is";
        };
        $scope.placeOrder = function(){
            
            if(!$scope.product.inStock){
                alert("We're sorry, that product is out of stock.");
            };
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

