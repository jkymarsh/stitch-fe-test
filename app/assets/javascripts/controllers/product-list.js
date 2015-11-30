// https://docs.angularjs.org/guide/concepts#controller
window.jkymarshStitchFETest.controller('ProductListCtrl', ['ProductsService', function(ProductsService) {
  var that = this;

  ProductsService.getAllProducts().then(function(response) {
    console.log(response.data);
    that.products = response.data;
  });
}]);