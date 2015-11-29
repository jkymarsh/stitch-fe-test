window.jkymarshStitchFETest = angular.module('jkymarshStitchFETest', ['ui.router']);

window.jkymarshStitchFETest.config(function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /state1
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

  //
  // Now set up the states
  // $stateProvider
  //   .state('home', {
  //     url: "/home",
  //     views: {
  //             "product-list": {
  //               templateUrl: "/views/product-list.html",
  //               controller: "ProductListCtrl as productList" },
  //             "product-detail-view": { templateUrl: "/views/empty-detail-view.html" }
  //           }
  //   })
  //   .state('product', {
  //           url: "/products/:productId",
  //           views: {
  //                   "product-list": {
  //                     templateUrl: "/views/product-list.html",
  //                     controller: "ProductListCtrl as productList" },
  //                   "product-detail-view": { templateUrl: "/views/empty-detail-view.html" }
  //                 },
  //           controller: function ($stateParams) {
  //             console.log($stateParams);
  //           }
  //       })






  //   .state('state1', {
  //     url: "/state1",
  //     templateUrl: "/views/state1.html"
  //   })
  //   .state('state1.list', {
  //     url: "/list",
  //     templateUrl: "/views/state1.list.html",
  //     controller: function($scope) {
  //       $scope.items = ["A", "List", "Of", "Items"];
  //     }
  //   })
  //   .state('state2', {
  //     url: "/state2",
  //     templateUrl: "/views/state2.html"
  //   })
  //   .state('state2.list', {
  //     url: "/list",
  //     templateUrl: "/views/state2.list.html",
  //     controller: function($scope) {
  //       $scope.things = ["A", "Set", "Of", "Things"];
  //     }
  //   });

});