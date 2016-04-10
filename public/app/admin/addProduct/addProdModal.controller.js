(function(){
//Controller for Modal instance

    var app = angular.module('zorgApp');
        
    app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, prodName, status) {
        
        $scope.status = status;  //to be used to change message if 
        //POST unsucessful. 
        
        $scope.prodName = prodName;

        $scope.ok = function () {
            $uibModalInstance.close();
        };

    });

}());
