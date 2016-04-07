(function(){
    
    var app = angular.module('zorgApp');
    
    app.service('updateProductService', function($http, $q){
        
        var baseUrl = 'http://localhost:8000';
        
        this.updateProduct = function(productObj, id){
            return $http({
                method: 'PUT',
                url: baseUrl + '/api/products/' + id,
                data: productObj
            })
                    .then(function(response){
                        console.log('service response', response);
            });
        };
        
    });
    
}());
