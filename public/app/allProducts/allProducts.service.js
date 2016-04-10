(function(){
    
    var app = angular.module('zorgApp');
    
    app.service('allProductsService', function($http){
        
        var baseUrl = 'http://localhost:8000';
        
        this.getProducts = function(){
            
            return $http({
                method: 'GET', 
                url: baseUrl + '/api/products'
            })
                    .then(function(response){
                        return response.data;
            });
            
        };
        
    });
    
}());

