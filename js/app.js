"use strict";

const express = require('express');
let app = express();
let router = express.Router();
const bodyParser = require('body-parser');

router.get('/', function(req, res){
   res.send('GET route on things.');
});

router.post('/', function(req, res){
   res.send('POST route on things.');
});

module.exports = app;
app.listen(3000);
