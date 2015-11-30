// TODO: should be provided by env variables, this is incredibly insecure!
var API_KEY = '96d4498319c771f0764e73b2bf6e011e';
var PASSWD = 'e7f797fa4268868a7639383a2bad9493';
var STORE_NAME = 'stitchlabs-jkymarsh';

module.exports = function(channel, url) {
  var url;

  console.log('hahaha');

  if (channel === "shopify") {
    url = 'https://' + API_KEY + ':' + PASSWD + '@' + STORE_NAME + '.myshopify.com' + url;
  } else {
    // TODO: better handling of non-shopify channels
    url = 'NONSENSE';
  }

  return url;
};