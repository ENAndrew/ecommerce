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
        })
                .state('admin', {
                    url: '/admin',
                    templateUrl: 'app/admin/admin-view.html'
        })
                .state('adminAdd', {
                    parent: 'admin',
                    url: 'admin/add-product',
                    templateUrl: 'app/admin/admin-addProduct.html',
                    controller: 'addProductCtrl'
        });
        
        $urlRouterProvider.otherwise('/');
        
    });
    
}());


