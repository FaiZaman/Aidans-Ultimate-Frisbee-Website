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
		"score": "",
		"venue": "American Football Pitch",
		"date": "26/01/2019",
		"time": "12:00pm"
	},
	{
		"opponent": "St Chad's A's",
		"score": "",
		"venue": "Whinney Hill 2",
		"date": "27/01/2019",
		"time": "01:00pm"
	},
	{
		"opponent": "Castle A's",
		"score": "",
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

app.post('/add_person', (request, response) => {
	let username = request.params.username;
	let forename = request.params.forename;
	let surname = request.params.surname;
	let role = request.params.role;
});

module.exports = app;
