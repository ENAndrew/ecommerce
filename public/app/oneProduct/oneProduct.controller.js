(function(){
    
    var app = angular.module('zorgApp');
    
    app.controller('oneProductCtrl', function($scope, $state, product, oneProductService){
        
        var commentObj = {};
        
        $scope.product = product[0];
        
        $scope.prodComments = $scope.product.comments;
        
        console.log('the comments are ', $scope.prodComments);
        
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
            
            commentObj["user"] = userName;
            commentObj["comment"] = comment;
            
            var id = $scope.product._id;
            
            //updates current $scope with new comment, on page reload all comments are
            //obtained from the collection
            $scope.prodComments.push(commentObj);  

            oneProductService.updateComment(commentObj, id);
            
            $scope.comment = "";
            $scope.userName = "";
            
        };

        
    });
    
}());

