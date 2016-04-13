(function(){
    
    var app = angular.module('zorgApp');
    
    app.service('manageCommentsService', function($http){
        
        var baseUrl = 'http://localhost:8000';
        
        this.deleteComment = function(prodId, commentId){
            
            return $http({
                method: 'PUT',
                url: baseUrl + '/api/products/' + prodId + '/' + commentId
            })
                    .then(function(response){
                        return response;
            });
        };
        
    });
    
    
}());