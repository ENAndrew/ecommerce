(function(){
    
    var app = angular.module('zorgApp');
    
    app.controller('contactCtrl', function($scope, $uibModal, contactService){
        
         //Open Modal instance
        var open = function(){
            
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                controller: 'contactModalInstanceCtrl',
                size: 'md'
            });
        };
        
        
        $scope.submitEmail = function(userEmail, emailText){
            
            //Build req body object
            var emailObj = {
                from: userEmail,
                text: emailText
            };
            
            open();
            
//            contactService.sendEmail(emailObj);  (functional, but no auth info in public server code)
            
            //Reset inputs
            $scope.email = "";
            $scope.text = "";
            
        };
        
        
        
    });

}());
