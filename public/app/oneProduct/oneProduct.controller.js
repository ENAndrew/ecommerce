(function(){
    
    var app = angular.module('zorgApp');
    
    app.controller('oneProductCtrl', function($scope, $state, product, oneProductService){
        
        var commentObj = {};
        
        $scope.product = product[0];
        
        $scope.prodComments = $scope.product.comments;
        
        console.log('the comments are ', $scope.prodComments);
        
        //will need to populate this with a GET request to have all the existing comments
        //on page load, then also push new comments to the object for immediate view
        
        $scope.totalCost = 0;
        
        $scope.stockVer = "is not";
        
        if($scope.product.inStock){
            $scope.stockVer = "is";
        };
        
        $scope.placeOrder = function(){
            
            if(!$scope.product.inStock){
                alert("We're sorry, that product is out of stock.");
            }
            
        };
        
        $scope.sendComment = function(userName, comment){
            
//            commentObj["product_id"] = $scope.product._id;
            commentObj["user"] = userName;
            commentObj["comment"] = comment;
            
            var id = $scope.product._id;
            
            console.log('the comment object is ', commentObj);

            
            oneProductService.updateComment(commentObj, id);
            
            $scope.comment = "";
            $scope.userName = "";
            
        };

        
    });
    
}());

