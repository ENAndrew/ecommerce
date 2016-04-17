(function(){
//Controller for Modal instance

    var app = angular.module('zorgApp');
        
    app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, prodName, status) {
        
        //Placeholders for alert text
        $scope.postResult = '';
        
        $scope.prodName = prodName;
        
        //Retrieves status from result of $http call
        if(status){
            $scope.postResult = "Success!";
        } else {
            $scope.postResult = "There's Been a Problem";
        }
 
        //On failure of submission to database
        if(!prodName){
            $scope.prodName = "Nothing";
        }

        $scope.ok = function () {
            $uibModalInstance.close();
        };

    });

}());
