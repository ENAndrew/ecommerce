(function(){
   
    var app = angular.module('zorgApp');
    
    app.config(function($urlRouterProvider, $stateProvider){
        
        $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/home/home-view.html'
        })
                .state('careers', {
                    url: '/careers',
                    templateUrl: 'app/careers/careers-view.html'
        });
        
        $urlRouterProvider.otherwise('/');
        
    });
    
}());


