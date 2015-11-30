// TODO: cache ajax responses when possible?

// http://blog.thoughtram.io/angular/2015/07/07/service-vs-factory-once-and-for-all.html
window.jkymarshStitchFETest.service('ProductsService', ['$http', function ($http) {

  return {
    sayHello: function () {
      console.log(Promise);
      console.log('hello');
    },
    getAllProducts: function() {
      return $http({
        method: 'GET',
        url: '/api/v1/products?channel=shopify&url=/admin/products.json?fields=body_html,created_at,id,title,variants'
      });
    },
    getAllVariants: function(productId) {
      return $http({
        method: 'GET',
        url: '/api/v1/products/3923236550?channel=shopify&url=/admin/products/3923236550/variants.json'
      });
    },
    updateVariant: function(variantId) {
      return $http({
        method: 'PUT',
        url: '/api/v1/variants/11436115974?channel=shopify&url=/admin/variants/11436115974.json',
        data: {
          "variant": {
              "id": 11436115974,
              "option2": "S"
            }
        }
      });
    }
  }
}]);