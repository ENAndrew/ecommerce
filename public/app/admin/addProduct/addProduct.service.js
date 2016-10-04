(function(){
    
    var app = angular.module('zorgApp');
    
    app.service('addProductService', function($http, $q){
        
        var baseUrl = 'http://zorg.clandrew.com';
        
        this.addProduct = function(productObj){
            return $http({
                method: 'POST',
                url: baseUrl + '/api/products',
                data: productObj
            });
        };
        
    });
    
}());
