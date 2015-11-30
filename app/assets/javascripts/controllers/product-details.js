// https://docs.angularjs.org/guide/concepts#controller
window.jkymarshStitchFETest.controller('ProductDetailsCtrl', ['ProductsService', function(ProductsService) {
  var that = this;

  this.qty = 1;
  this.cost = 2;
  this.inCurr = 'EUR';
  this.currencies = ['USD', 'EUR', 'CNY'];
  this.usdToForeignRates = {
    USD: 1,
    EUR: 0.74,
    CNY: 6.09
  };

  ProductsService.getAllVariants().then(function(response) {
    console.log(response.data);
    that.variants = response.data;
  });

  this.updateVariant = function(variantId) {
    console.log('update variant: ', variantId);
  };

  this.total = function total(outCurr) {
    return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
  };
  this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
    return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
  };
  this.pay = function pay() {
    window.alert("Thanks!");
  };
}]);