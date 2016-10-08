(function(){
    
    var app = angular.module('zorgApp');
    
    app.service('removeProductService', function($http){
        
        var baseUrl = 'http://zorg.clandrew.com';
        
        this.removeProduct = function(id){
            return $http({
                method: 'DELETE',
                url: baseUrl + '/public/api/products/' + id
            });
        };
        
    });
    
}());

