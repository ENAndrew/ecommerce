(function(){
//Controller for Modal instance

    var app = angular.module('zorgApp');
        
    app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, prodName, status) {
        
        $scope.postResult = '';
        
        if(status){
            $scope.postResult = "Success!";
            $scope.message = "has";
        } else {
            $scope.postResult = "There's Been a Problem";
        }
        
        $scope.prodName = prodName;
        
        if(!prodName){
            $scope.prodName = "Nothing";
        }

        $scope.ok = function () {
            $uibModalInstance.close();
        };

    });

}());
