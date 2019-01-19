/* jshint -W097*/
/* jshint -W079 */
/* jshint esversion: 6 */
/* jshint node: true */
"use strict";

const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + '/..')));

let exec = [
	{
    "username": "doctorwhocomposer",
		"forename": "Delia",
		"surname": "Derbyshire",
		"role": "Composer"
	},
  {
    "username": "lewbew02",
    "forename": "Lewis",
    "surname": "Sudbury",
    "role": "A-Team Captain"
  },
  {
    "username": "tomthetank",
    "forename": "Tom",
    "surname": "Lafferty",
    "role": "B-Team Captain"
  },
  {
    "username": "samchamp",
    "forename": "Sam",
    "surname": "Higginson",
    "role": "Social Secretary"
  },
  {
    "username": "hermworm",
    "forename": "Herman",
    "surname": "Wong",
    "role": "Treasurer"
  },
  {
    "username": "carrrolina",
    "forename": "Carolina",
    "surname": "Girlons",
    "role": "Photographer"
  },
  {
    "username": "baxman",
    "forename": "Oliver",
    "surname": "Baxandall",
    "role": "Just a genuine guy to be honest"
  }
];

app.get('/people', (request, response) => {
  response.send(exec);
  response.statusCode(200);
});

app.get('/people/:id', (request, response) => {
  // each individual person identified by username
});

app.post('/people', (request, response) => {
  let rowData = {};
  rowData.username = request.body.username;
  rowData.forename = request.body.forename;
  rowData.surname = request.body.surname;
  rowData.role = request.body.role;
  response.send(rowData);
});

module.exports = app;
