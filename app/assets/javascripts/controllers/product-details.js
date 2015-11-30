// https://docs.angularjs.org/guide/concepts#controller
window.jkymarshStitchFETest.controller('ProductDetailsCtrl', ['$stateParams', 'ProductsService', 'VariantsService', function($stateParams, ProductsService, VariantsService) {
  var that = this;

  this.productId = $stateParams.productId;

  ProductsService.getAllProductVariants($stateParams.productId).then(function(response) {
    console.log(response.data);
    that.variants = response.data;
  });

  this.updateVariant = function(variant) {
    VariantsService.updateVariant(variant).then(function(response) {
      console.log(response);
    });
  };
}]);