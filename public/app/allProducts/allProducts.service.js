(function(){
    
    var app = angular.module('zorgApp');
    
    app.service('allProductsService', function($http){
        
        var baseUrl = 'http://zorg.clandrew.com';
        
        this.getProducts = function(){
            
            return $http({
                method: 'GET', 
                url: baseUrl + '/public/api/products'
            })
                    .then(function(response){
                        return response.data;
            });
            
        };
        
    });
    
}());

