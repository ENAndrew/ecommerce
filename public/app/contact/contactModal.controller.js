(function(){
//Controller for Modal instance

    var app = angular.module('zorgApp');
        
    app.controller('contactModalInstanceCtrl', function ($scope, $uibModalInstance) {
        

        $scope.ok = function () {
            $uibModalInstance.close();
        };

    });

}());


