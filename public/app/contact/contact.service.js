(function(){
    
    var app = angular.module('zorgApp');
    
    app.service('contactService', function($http){
        
        var baseUrl = 'http://localhost:8000';
        
        this.sendEmail = function(emailObj){
            
            return $http({
                method: 'POST',
                url: baseUrl + '/api/postEmail',
                data: emailObj
            })
                    .then(function(response){
                        console.log('contactService response is ', response);
            });  
        };
        
    });
    
}());
