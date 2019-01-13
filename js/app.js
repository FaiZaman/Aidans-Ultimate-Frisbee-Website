/* jshint -W097 */
/* jshint esversion: 6 */
/* jshint node: true */
"use strict";

const path = require('path');
const express = require('express');
const app = express();
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + '/..')));

app.get('/', (req, res) => {
   res.sendStatus(200);
   res.end();
});

app.post('/', (req, res) => {
   res.send('POST route on things.');
});

const requestDir = path.join(__dirname + '/../json/data.json');
const request = new XMLHttpRequest();
request.open("GET", requestDir);

module.exports = app;
