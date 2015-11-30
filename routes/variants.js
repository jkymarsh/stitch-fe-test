var express = require('express');
var request = require('request');
var router = express.Router();
var channelHelper = require('./helpers/channel');

router.put('/:variant_id', function(req, res){
  request({
    url: channelHelper(req.query.channel, req.query.url),
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