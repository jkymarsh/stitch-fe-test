window.jkymarshStitchFETest = angular.module('jkymarshStitchFETest', ['ui.router']);

window.jkymarshStitchFETest.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('master', {
      abstract: true,
      views: {
        layout: {
          templateUrl: '/views/layouts/master.html',
        }
      }
    })
    .state('home', {
      url: '/home',
      templateUrl: '/views/empty-detail-view.html',
      parent: 'master',
    })
    .state('product', {
      url: "/products/:productId",
      templateUrl: "/views/product-detail-view.html",
      controller: "ProductDetailsCtrl as productDetails",
      parent: 'master'
    });
});