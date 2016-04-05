(function(){
    
    var app = angular.module('zorgApp');
    
    app.service('addProductService', function($http, $q){
        
        var baseUrl = 'http://localhost:8000'
        
        this.addProduct = function(productObj){
            return $http({
                method: 'POST',
                url: baseUrl + '/api/products',
                data: productObj
            })
                    .then(function(response){
                        console.log('service response', response);
            });
        };
        
    });
    
}());
