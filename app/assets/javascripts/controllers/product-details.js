// https://docs.angularjs.org/guide/concepts#controller
window.jkymarshStitchFETest.controller('ProductDetailsCtrl', ['$stateParams', 'ProductsService', function($stateParams, ProductsService) {
  var productId = $stateParams.productId
  var that = this;

  ProductsService.getAllVariants(productId).then(function(response) {
    console.log(response.data);
    that.variants = response.data;
  });

  this.updateVariant = function(variant) {
    ProductsService.updateVariant(variant).then(function(response) {
      console.log(response);
    });
  };
}]);