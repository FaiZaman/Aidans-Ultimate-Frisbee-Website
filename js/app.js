/* jshint -W097 */
/* jshint esversion: 6 */
/* jshint node: true */
"use strict";

const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send('GET route on things.');
});

app.post('/', (req, res) => {
   res.send('POST route on things.');
});

module.exports = app;
