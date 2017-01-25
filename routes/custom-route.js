// custom-route.js
// Route to do custom stuff
// Reached on /api/custom-route

//* Commented due to runtime error. Uncomment when connected to service
//* Change variable name and model file name to reflect the Watson Service

//var WatsonService = require('../models/custom-model');

// Remove this when connected to Watson Service
var WatsonService = {
  apiFunction : function(){
                  return "Hello World from Service";
                }
};

var express = require('express');
var router = express.Router();

//POST something
router.post('/', function(req, res, next) {
  var action = WatsonService.apiFunction();

  var reqBody = req.body;

  var data = {
    action: 'POST',
    status: 'Successfully posted'
  };

  res.status(200).json(data);
});

//GET something
router.get('/', function(req, res, next) {
  var action = WatsonService.apiFunction();

  var reqBody = req.body;

  var data = {
    action: 'GET',
    status: 'Successfully gotten'
  };

  res.status(200).json(data);
});

//PUT something
router.put('/', function(req, res, next) {
  var action = WatsonService.apiFunction();

  var reqBody = req.body;

  var data = {
    action: 'PUT',
    status: 'Successfully put'
  };

  res.status(200).json(data);
});

//DELETE something
router.delete('/', function(req, res, next) {
  var action = WatsonService.apiFunction();

  var reqBody = req.body;

  var data = {
    action: 'DELETE',
    status: 'Successfully deleted'
  };

  res.status(200).json(data);
});

module.exports = router;
