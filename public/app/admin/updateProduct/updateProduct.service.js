(function(){
    
    var app = angular.module('zorgApp');
    
    app.service('updateProductService', function($http, $q){
        
        var baseUrl = 'http://zorg.clandrew.com';
        
        this.updateProduct = function(productObj, id){
            return $http({
                method: 'PUT',
                url: baseUrl + '/public/api/products/' + id,
                data: productObj
            })
                    .then(function(response){
                        console.log('service response', response);
            });
        };
        
    });
    
}());
