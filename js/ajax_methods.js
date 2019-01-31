/* jshint -W097 */
/* jshint esversion: 6 */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */
/* jshint devel: true */
"use strict";

$(document).ready(function(){

  const origin = window.location.origin;
  const urlPeople = origin + "/people";
  const urlMatches = origin + "/matches";

  checkLoggedIn();
  getPeopleRequest();
  getMatchesRequest();

  function checkLoggedIn(){
    if ($("#login-button").text() != "Log Out"){
      // user is logged out
      $("#add-member-button").hide();
    }
    else{
      // user is logged in
      $("#add-member-button").show(500);
      $("#login-button").text("Log Out");
      $("#permission").hide(500);
    }
  }

  // verify login with JSON
  $("#login-button").on('click', function(){
    if ($(this).text() != "Log Out"){
      // user is logged out
      $("#login-submit").on('click', function(){
        const username = $("#username").val();
        const password = $("#password").val();
        verifyLogin(username, password);
      });
    }
    else{
      // user is logged in
      $(this).text("Log Out");
      location.reload();
    }
  });

  function verifyLogin(username, password){
    // loop through the JSON and check for a username and password match
    $.getJSON(urlPeople, function(data){
      $.each(data, function(key, value){
        if (username == value.username){
          if (password == value.password){
            $("#loginModal").hide(500);
            $("#login-close").click();
            $("#login-button").text("Log Out");
            checkLoggedIn();
          }
        }
      });
    });
    // display error - wrong username or Password
    if ($("#login-button").text() != "Log Out"){
      // if not logged in
      $("#login-error").show(500);
    }
  }

  function getPeopleRequest(){
    $.getJSON(urlPeople, function(data){
      // get JSON and load it into the table
      let tableData = "";
      $.each(data, function(key, value){
        tableData += "<tr>";
        tableData += "<th scope='row'>" + value.username + "</th>";
        tableData += "<td>" + value.forename + "</td>";
        tableData += "<td>" + value.surname + "</td>";
        tableData += "<td>" + value.role + "</td>";
        tableData += "</tr>";
      });
      $("#execTable").append(tableData);
    });
  }

  function getMatchesRequest(){
    $.getJSON(urlMatches, function(data){
      // get JSON and load it into the table
      let tableData = "";
      $.each(data, function(key, value){
        tableData += "<tr>";
        tableData += "<th scope='row'>" + value.opponent + "</th>";
        tableData += "<td>" + value.score + "</td>";
        tableData += "<td>" + value.venue + "</td>";
        tableData += "<td>" + value.date + "</td>";
        tableData += "<td>" + value.time + "</td>";
        tableData += "</tr>";
      });
      $("#matchTable").append(tableData);
    });
  }

  // get data submitted for a POST requested
  $("#add-member-form").on('submit', function(e){
    e.preventDefault();
    const username = $("#new-username").val();
    const password = $("#new-password").val();
    const forename = $("#new-forename").val();
    const surname = $("#new-surname").val();
    const role = $("#new-role").val();
    postPersonData(username, password, forename, surname, role);
  });

  function postPersonData(username, password, forename, surname, role){
    // add a new person to the JSON using a POST request
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/people",
      headers: {
        "username": username,
        "password": password,
        "forename": forename,
        "surname": surname,
        "role": role,
        "access_token": "concertina"
      },
      dataType: "json",
    });
    $("#peopleTableBody").empty();
    getPeopleRequest();
    emptyFields();
  }

  $("#add-score-form").on('submit', function(e){
    e.preventDefault();
    const ourScore = $("#our-score").val();
    const theirScore = $("#their-score").val();
    let result = "";

    if (ourScore > theirScore){
      // victory
      result = ourScore + " - " + theirScore + " (W)";
    }
    else if (theirScore > ourScore){
      // defeat
      result = ourScore + " - " + theirScore + " (L)";
    }
    else{
      // draw
      result = ourScore + " - " + theirScore + " (D)";
    }

    postScore(result);
  });

  function postScore(result){
    // post the result of the match to update table
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/matches",
      headers: {
        "result": result,
        "access_token": "concertina"
      },
      dataType: "json",
    });
    $("#matchesTableBody").empty();
    getMatchesRequest();
    emptyFields();
    $.getJSON(urlMatches, function(data){
      $.each(data, function(key, value){
        if (value.score == ""){
          value.score = result;
        }
      });
    });
  }

  function emptyFields(){
    $("#new-username").val("");
    $("#new-password").val("");
    $("#new-forename").val("");
    $("#new-surname").val("");
    $("#new-role").val("");
    $("#our-score").val("");
    $("#their-score").val("");
  }
});
