/* jshint -W097 */
/* jshint esversion: 6 */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */
/* jshint devel: true */
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
		"password": "abcdef",
		"forename": "Delia",
		"surname": "Derbyshire",
		"role": "Composer"
	},
  {
    "username": "lewbew02",
		"password": "correcthorsebatterystaple",
    "forename": "Lewis",
    "surname": "Sudbury",
    "role": "A-Team Captain"
  },
  {
    "username": "tomthetank",
		"password": "starwars",
    "forename": "Tom",
    "surname": "Lafferty",
    "role": "B-Team Captain"
  },
  {
    "username": "samchamp",
		"password": "111111",
    "forename": "Sam",
    "surname": "Higginson",
    "role": "Social Secretary"
  },
  {
    "username": "hermworm",
		"password": "apple",
    "forename": "Herman",
    "surname": "Wong",
    "role": "Treasurer"
  },
  {
    "username": "carrrolina",
		"password": "qwerty",
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

let matches = [
	{
		"opponent": "St John's A's",
		"score": "6 - 7 (L)",
		"venue": "Whinney Hill 1",
		"date": "21/10/2018",
		"time": "12:00pm"
	},
	{
		"opponent": "St Cuthbert's A's",
		"score": "3 - 12 (L)",
		"venue": "Whinney Hill 1",
		"date": "28/10/2018",
		"time": "12:00pm"
	},
	{
		"opponent": "Hatfield A's",
		"score": "8 - 11 (L)",
		"venue": "American Football Pitch",
		"date": "19/01/2019",
		"time": "12:00pm"
	},
	{
		"opponent": "Collingwood A's",
		"score": "7 - 6 (W)",
		"venue": "American Football Pitch",
		"date": "26/01/2019",
		"time": "12:00pm"
	},
	{
		"opponent": "Castle A's",
		"score": "5 - 10 (L)",
		"venue": "Whinney Hill 2",
		"date": "16/02/2019",
		"time": "01:00pm"
	},
	{
		"opponent": "Trevelyan A's",
		"score": "",
		"venue": "Whinney Hill 1",
		"date": "23/02/2019",
		"time": "01:00pm"
	},
	{
		"opponent": "Grey A's",
		"score": "",
		"venue": "Whinney Hill 2",
		"date": "24/02/2019",
		"time": "01:00pm"
	},
	{
		"opponent": "Ustinov A's",
		"score": "",
		"venue": "Whinney Hill 2",
		"date": "09/03/2019",
		"time": "01:00pm"
	},
	{
		"opponent": "St Chad's A's",
		"score": "",
		"venue": "Whinney Hill 1",
		"date": "10/03/2019",
		"time": "12:00pm"
	}
];

app.get('/matches', (request, response) => {
	response.send(matches);
});

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

app.post('/people', (request, response) => {
	const username = request.headers.username;
	const password = request.headers.password;
	const forename = request.headers.forename;
	const surname = request.headers.surname;
	const role = request.headers.role;
	const accessToken = request.headers.access_token;

	const duplicate = exec.find(p => p.username == username);

	if (accessToken != "concertina"){
		response.status(403).send("Incorrect access token");
	}
	else if (duplicate){
		response.status(400).send("This username is already taken");
	}
	else{
		const person = {
		    "username": username,
				"password": password,
				"forename": forename,
				"surname": surname,
				"role": role
		};

		exec.push(person);
		response.status(200).send();
	}
});

app.post('/matches', (request, response) => {
	const score = request.headers.result;
	const accessToken = request.headers.access_token;

	if (accessToken != "concertina"){
		response.status(403).send("Incorrect access token");
	}
	else{
		const result = {
			"score": score,
		};
		response.status(200).send();
	}
});

module.exports = app;
