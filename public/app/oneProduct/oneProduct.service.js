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
        
        this.updateComment = function(commentObj, id){
            
            return $http({
                method: 'PUT',
                url: baseUrl + '/api/products/comments/' + id,
                data: commentObj
            })
                    .then(function(response){
                        console.log('updateComment response is ', response.data);
            });
        };
        
    });
    
}());

