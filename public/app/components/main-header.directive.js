(function(){
    
    var app = angular.module('zorgApp');
    
    app.directive('mainHeader', function(){
        return {
            restrict: "EA",
            templateUrl: "app/components/main-header.directive.html"
        };
    });
    
}());


