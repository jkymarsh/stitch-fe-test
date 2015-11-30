var express = require('express');
var request = require('request');
var router = express.Router();

// TODO: should be provided by env variables, this is incredibly insecure!
var API_KEY = '96d4498319c771f0764e73b2bf6e011e';
var PASSWD = 'e7f797fa4268868a7639383a2bad9493';
var STORE_NAME = 'stitchlabs-jkymarsh';

router.put('/:variant_id', function(req, res){
  request({
    url: 'https://' + API_KEY + ':' + PASSWD + '@' + STORE_NAME + '.myshopify.com' + req.query.url,
    method: "PUT",
    json: true,
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(req.body)
  }, function (error, response, body) {
    if (!error && response.statusCode === 200 || response.statusCode === 201) {
      res.status(200).send(body);
    } else {
      console.log(error);
      //console.log(response);
      res.status(500).send(body);
    }
  });
});

module.exports = router;