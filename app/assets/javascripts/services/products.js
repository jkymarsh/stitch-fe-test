// TODO: cache ajax responses when possible?

// http://blog.thoughtram.io/angular/2015/07/07/service-vs-factory-once-and-for-all.html
window.jkymarshStitchFETest.service('ProductsService', ['$http', function ($http) {

  return {
    getAllProducts: function() {
      return $http({
        method: 'GET',
        url: '/api/v1/products?channel=shopify&url=/admin/products.json?fields=body_html,created_at,id,title,variants'
      });
    },
    getAllProductVariants: function(productId) {
      return $http({
        method: 'GET',
        url: '/api/v1/products/' + productId + '?channel=shopify&url=/admin/products/' + productId + '/variants.json'
      });
    }
  }
}]);