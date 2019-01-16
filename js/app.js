/* jshint -W097*/
/* jshint -W079 */
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

app.get('/', (request, response) => {
   response.sendStatus(200);
   response.end();
});

app.post('/', (request, response) => {
   response.send('POST route on things.');
});

let exec = {
	"1": {
		"first_name": "Lewis",
		"last_name": "Sudbury",
		"username": "lewbew02",
		"role": "A-Team Captain"
	},
	"2": {
		"first_name": "Tom",
		"last_name": "Lafferety",
		"username": "tombom0h0m",
		"role": "B-Team Captain"
	}
};

let execJSON = JSON.stringify(exec);

const requestDir = path.join(__dirname + '/../json/data.json');
const request = new XMLHttpRequest();
request.open("GET", requestDir);

module.exports = app;
