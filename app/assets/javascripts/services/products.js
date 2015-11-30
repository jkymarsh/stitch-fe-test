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
    getAllVariants: function(productId) {
      return $http({
        method: 'GET',
        url: '/api/v1/products/' + productId + '?channel=shopify&url=/admin/products/' + productId + '/variants.json'
      });
    },
    updateVariant: function(variant) {
      var variantId = variant.id;

      return $http({
        method: 'PUT',
        url: '/api/v1/variants/' + variantId + '?channel=shopify&url=/admin/variants/' + variantId + '.json',
        data: {
          "variant": {
            title: variant.title,
            sku: variant.sku,
            inventory_quantity: variant.inventory_quantity,
            option1: variant.option1,
            option2: variant.option2,
            option3: variant.option3,
            price: variant.price
          }
        }
      });
    }
  }
}]);