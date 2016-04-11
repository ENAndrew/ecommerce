(function(){

    var app = angular.module('zorgApp');
        
    app.controller('manageCommentsCtrl', function ($scope, products, manageCommentsService) {
        
        //Accordion panels only open one at a time
        $scope.oneAtATime = true;

        $scope.products = products;
        
        
        //Delete commment by product and embedded comment Id values
        $scope.deleteComment = function(prodId, commentId){
            
            console.log('product ID is ' + prodId + ' and comment Id is ' + commentId);
        };

        
        });

}());

