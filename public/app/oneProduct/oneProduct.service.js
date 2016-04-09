(function(){
    
    var app = angular.module('zorgApp');
    
    app.service('oneProductService', function($http){
        
        var baseUrl = 'http://localhost:8000';
        
        this.getProduct = function(name){
            
            return $http({
                method: 'GET',
                url: baseUrl + '/api/products/?name=' + name
            })
                    .then(function(response){
                        console.log('getProduct response is ', response.data);
                        return response.data;
            });
            
        };
        
        this.sendComment = function(commentObj){
            
            return $http({
                method: 'POST',
                url: baseUrl + '/api/comments',
                data: commentObj
            })
                    .then(function(response){
                        console.log('send comment response', response);
            });
        };
        
        
    });
    
}());

