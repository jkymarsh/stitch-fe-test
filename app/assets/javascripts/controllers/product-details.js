// https://docs.angularjs.org/guide/concepts#controller
window.jkymarshStitchFETest.controller('ProductDetailsCtrl', ['ProductsService', function(ProductsService) {
  that = this;

  this.qty = 1;
  this.cost = 2;
  this.inCurr = 'EUR';
  this.currencies = ['USD', 'EUR', 'CNY'];
  this.usdToForeignRates = {
    USD: 1,
    EUR: 0.74,
    CNY: 6.09
  };

  // ProductsService.getAll().then(function(response) {
  //   console.log(response.data);
  //   that.products = response.data;
  // });

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