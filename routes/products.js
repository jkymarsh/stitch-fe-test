var express = require('express');
var request = require('request');
var router = express.Router();

// TODO: should be provided by env variables, this is incredibly insecure!
var API_KEY = '96d4498319c771f0764e73b2bf6e011e';
var PASSWD = 'e7f797fa4268868a7639383a2bad9493';
var STORE_NAME = 'stitchlabs-jkymarsh';

router.get('/', function(req, res) {
  var url;

  res.set({'Content-Type': 'application/json'});

  if (req.query.channel === "shopify") {
    url = 'https://' + API_KEY + ':' + PASSWD + '@' + STORE_NAME + '.myshopify.com' + req.query.url;
  } else {
    // TODO: better handling of non-shopify channels
    url = 'NONSENSE';
  }

  request(url, function (error, response, body) {
    var productsJSON;
    var productsArr;

    if (!error && response.statusCode == 200) {
      productsJSON = JSON.parse(body).products;
      productsArr = [];

      productsJSON.forEach(function(ele, idx) {
        productsArr.push({
          desc: ele.body_html,
          created_at: ele.created_at,
          id: ele.id,
          title: ele.title,
          num_variants: ele.variants.length
        });
      });

      res.status(200).send(productsArr);
    } else {
      console.log(error);
      console.log(response.statusCode);
      res.status(response.statusCode).send(body);
    }
  });
});

router.post('/post', function(req, res){

  var path = req.query.path
    , requestData = req.body
    ;

  console.log(requestData);

  request({
    url: 'https://' + API_KEY + ':' + PASSWD + '@' + STORE_NAME + '.myshopify.com' + path
    , method: "POST"
    , json: true
    , headers: {
      "content-type": "application/json"
    }
    , body: JSON.stringify(requestData)
  }
  , function (error, response, body) {

      console.log(response.statusCode);

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