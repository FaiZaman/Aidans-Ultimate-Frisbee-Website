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
		"password": "123456",
		"forename": "Delia",
		"surname": "Derbyshire",
		"role": "Composer"
	},
  {
    "username": "lewbew02",
		"password": "123456",
    "forename": "Lewis",
    "surname": "Sudbury",
    "role": "A-Team Captain"
  },
  {
    "username": "tomthetank",
		"password": "123456",
    "forename": "Tom",
    "surname": "Lafferty",
    "role": "B-Team Captain"
  },
  {
    "username": "samchamp",
		"password": "123456",
    "forename": "Sam",
    "surname": "Higginson",
    "role": "Social Secretary"
  },
  {
    "username": "hermworm",
		"password": "123456",
    "forename": "Herman",
    "surname": "Wong",
    "role": "Treasurer"
  },
  {
    "username": "carrrolina",
		"password": "123456",
    "forename": "Carolina",
    "surname": "Girlons",
    "role": "Photographer"
  },
  {
    "username": "baxman",
		"password": "123456",
    "forename": "Oliver",
    "surname": "Baxandall",
    "role": "Just a genuine guy to be honest"
  }
];

app.get('/people', (request, response) => {
  response.send(exec);
});

app.get('/people/:username', (request, response) => {
  // each individual person identified by username
	const person = exec.find(p => p.username == request.params.username);
	if (!person){
		response.status(404).send("The requested person could not be found");
	}
	else{
		response.send(person);
	}
});

app.post('/executive_list', (request, response) => {
	let username = request.params.username;
	let forename = request.params.forename;
	let surname = request.params.surname;
	let role = request.params.role;
});

module.exports = app;
