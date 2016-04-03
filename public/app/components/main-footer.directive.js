(function(){
    
    var app = angular.module('zorgApp');
    
    app.directive('mainFooter', function(){
        return {
            restrict: "EA",
            templateUrl: "app/components/main-footer.directive.html"
        };
    });
    
}());

