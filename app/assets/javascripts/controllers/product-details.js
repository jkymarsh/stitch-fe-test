// https://docs.angularjs.org/guide/concepts#controller
window.jkymarshStitchFETest.controller('ProductDetailsCtrl', ['$stateParams', 'ProductsService', 'VariantsService', function($stateParams, ProductsService, VariantsService) {
  var productId = $stateParams.productId
  var that = this;

  ProductsService.getAllProductVariants(productId).then(function(response) {
    console.log(response.data);
    that.variants = response.data;
  });

  this.updateVariant = function(variant) {
    VariantsService.updateVariant(variant).then(function(response) {
      console.log(response);
    });
  };
}]);