(function(){
    
    var app = angular.module('zorgApp');
    
    app.service('removeProductService', function($http){
        
        var baseUrl = 'http://localhost:8000'
        
        this.removeProduct = function(id){
            return $http({
                method: 'DELETE',
                url: baseUrl + '/api/products/' + id
            })
                    .then(function(response){
                        console.log('remove service response', response);
            });
        };
        
    });
    
}());

