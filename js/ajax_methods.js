/* jshint -W097 */
/* jshint esversion: 6 */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */
/* jshint devel: true */
"use strict";

$(document).ready(function(){
  let loggedIn = false;

  function checkLoggedIn(){
    if (!loggedIn){
      $("#add-member-button").hide();
    }
    else{
      $("#add-member-button").show(500);
      $("#login-button").text("Log Out");
    }
  }
  checkLoggedIn();

  const origin = window.location.origin;
  const urlPeople = origin + "/people";
  const urlMatches = origin + "/matches";

  function getRequest(){
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

  getRequest();

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

  // get data submitted for a POST requested
  $("#add-member-form").on('submit', function(e){
    e.preventDefault();
    const username = $("#new-username").val();
    const forename = $("#new-forename").val();
    const surname = $("#new-surname").val();
    const role = $("#new-role").val();
    postData(username, forename, surname, role);
  });

  function postData(username, forename, surname, role){
    // add a new person to the JSON using a POST request
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/people",
      headers: {
        "username": username,
        "forename": forename,
        "surname": surname,
        "role": role,
        "access_token": "concertina"
      },
      dataType: "json",
    });
    $("#tableBody").empty();
    getRequest();
    emptyFields();
  }

  function emptyFields(){
    $("#new-username").val("");
    $("#new-forename").val("");
    $("#new-surname").val("");
    $("#new-role").val("");
  }

  // verify login with JSON
  $("#login-submit").on('click', function(){
    const username = $("#username").val();
    const password = $("#password").val();
    verifyLogin(username, password);
  });

  function verifyLogin(username, password){
    // loop through the JSON and check for a username and password match
    $.getJSON(urlPeople, function(data){
      $.each(data, function(key, value){
        if (username == value.username){
          if (password == value.password){
            $("#loginModal").hide(500);
            $("#login-close").click();
            loggedIn = true;
            checkLoggedIn();
          }
        }
      });
    });
  }
});
