var express = require('express');
var request = require('request');
var router = express.Router();
var channelHelper = require('./helpers/channel');

router.get('/', function(req, res) {
  var url = channelHelper(req.query.channel, req.query.url);

  res.set({'Content-Type': 'application/json'});

  request(url, function (error, response, body) {
    var productsJSON;
    var productsArr;

    if (!error && response.statusCode == 200) {
      productsJSON = JSON.parse(body).products;
      productsArr = [];

      productsJSON.forEach(function(ele, idx) {
        productsArr.push({
          description: ele.body_html,
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

router.get('/:product_id', function(req, res) {
  var url = channelHelper(req.query.channel, req.query.url);

  res.set({'Content-Type': 'application/json'});

  request(url, function (error, response, body) {
    var variantsJSON;
    var variantsArr;

    if (!error && response.statusCode == 200) {
      variantsJSON = JSON.parse(body).variants;
      variantsArr = variantsJSON ? variantsJSON : [];

      res.status(200).send(variantsArr);
    } else {
      console.log(error);
      console.log(response.statusCode);
      res.status(response.statusCode).send(body);
    }
  });
});

module.exports = router;