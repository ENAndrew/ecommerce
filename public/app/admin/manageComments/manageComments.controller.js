(function(){

    var app = angular.module('zorgApp');
        
    app.controller('manageCommentsCtrl', function ($scope, products, manageCommentsService) {
        
        //Accordion panels only open one at a time
        $scope.oneAtATime = true;

        //Retreive products information from resolve
        $scope.products = products;
        
        
        //Delete commment by product and embedded comment Id values
        //Manage comments appearing in current view
        $scope.deleteComment = function(prodId, commentId){
            
            //Send information to service to delete embedded comment by Id's of product and comment
            manageCommentsService.deleteComment(prodId, commentId);
            
            
            //The following finds the particular comment by prodId and commentId and removes it from the scope
            //So that view immediately changes without reloading view.  
            var objIndex = 0;
            var commentIndex = 0;
            
            $scope.products.forEach(function(obj, i){
                if(obj._id === prodId) {
                    return objIndex = i;
                };
            });
            
            var applicableComments = $scope.products[objIndex].comments;
            
            applicableComments.forEach(function(obj, i){
                if(obj._id === commentId){
                    return commentIndex = i;
                }
            });
            
            $scope.products[objIndex].comments.splice(commentIndex, 1);
        };

        
        });

}());

