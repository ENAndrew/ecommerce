(function(){
    
    var app = angular.module('zorgApp');
    
    app.service('oneProductService', function($http){
        
        var baseUrl = 'http://zorg.clandrew.com';
        
        
        //Retrieive specified product information by Id
        this.getProduct = function(name){
            
            return $http({
                method: 'GET',
                url: baseUrl + '/public/api/products/?name=' + name
            })
                    .then(function(response){
                        return response.data;
            });
            
        };
        
        //Embed comment object in specified product
        this.updateComment = function(commentObj, id){
            
            return $http({
                method: 'PUT',
                url: baseUrl + '/public/api/products/comments/' + id,
                data: commentObj
            });
        };
        
    });
    
}());

