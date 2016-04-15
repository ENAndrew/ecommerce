(function(){
//Controller for Modal instance

    var app = angular.module('zorgApp');
        
    app.controller('oneProdModalInstanceCtrl', function ($scope, $uibModalInstance, prodName) {
        
        $scope.name = prodName;

        $scope.ok = function () {
            $uibModalInstance.close();
        };

    });

}());

