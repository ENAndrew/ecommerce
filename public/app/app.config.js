(function(){
   
    var app = angular.module('zorgApp');
    
    app.config(function($urlRouterProvider, $stateProvider){
        
        $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/home/home-view.html'
        })
                .state('allProducts', {
                    url: '/all-products',
                    templateUrl: 'app/allProducts/allProducts-view.html',
                    controller: 'allProductsCtrl',
                    resolve: {
                        products: function(allProductsService) {
                            return allProductsService.getProducts();
                        }
                    }
        })
                .state('oneProduct', {
                    url: '/product:name',
                    templateUrl: 'app/oneProduct/oneProduct-view.html',
                    controller: 'oneProductCtrl',
                    resolve: {
                        product: function(oneProductService, $stateParams) {
                            return oneProductService.getProduct($stateParams.name);
                        }
                    }
        })
                .state('careers', {
                    url: '/careers',
                    templateUrl: 'app/careers/careers-view.html'
        })
                .state('contact', {
                    url: '/contact',
                    templateUrl: 'app/contact/contact-view.html'
        })
                .state('admin', {
                    url: '/admin',
                    templateUrl: 'app/admin/admin-view.html'
        })
                .state('adminAdd', {
                    parent: 'admin',
                    url: 'admin/add-product',
                    templateUrl: 'app/admin/addProduct/addProduct-view.html',
                    controller: 'addProductCtrl'
        })
                .state('adminRemove', {
                    parent: 'admin',
                    url: 'admin/remove-product',
                    templateUrl: 'app/admin/removeProduct/adminRemove-view.html',
                    controller: 'removeProductCtrl',
                    resolve: {
                        products: function(allProductsService) {
                            return allProductsService.getProducts();
                        }
                    }
        })
                .state('adminUpdate', {
                    parent: 'admin',
                    url: 'admin/update-product',
                    templateUrl: 'app/admin/updateProduct/updateProduct-view.html',
                    controller: 'updateProductCtrl',
                    resolve: {
                        products: function(allProductsService) {
                            return allProductsService.getProducts();
                        }
                    }
                });
        
        $urlRouterProvider.otherwise('/');
        
    });
    
}());


