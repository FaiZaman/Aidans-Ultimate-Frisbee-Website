/* jshint -W097 */
/* jshint esversion: 6 */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */
/* jshint devel: true */
"use strict";

$(document).ready(function(){
  $("#add-member-button").prop('disabled', 'true');

  $.getJSON("http://localhost:8080/people", function(data){
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

  $.getJSON("http://localhost:8080/matches", function(data){
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
      url: "http://localhost:8080/people",
      headers: {
        "username": username,
        "forename": forename,
        "surname": surname,
        "role": role,
        "access_token": "concertina"
      },
      dataType: "json",
    });
    location.reload();
  }

  // verify login with JSON
  $("#login-submit").on('click', function(){
    const username = $("#username").val();
    const password = $("#password").val();
    console.log(username, password);
    verifyLogin(username, password);
  });

  function verifyLogin(username, password){
    // loop through the JSON and check for a username and password match
    $.getJSON("http://localhost:8080/people", function(data){
      $.each(data, function(key, value){
        if (username == value.username){
          if (password == value.password){
            $("#loginModal").hide(500);
            $("#login-close").click();
            $("#add-member-button").prop('disabled', 'false');
          }
        }
      });
    });
  }
});
