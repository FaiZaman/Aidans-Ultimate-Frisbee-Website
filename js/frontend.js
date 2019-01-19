/* jshint -W097 */
/* jshint esversion: 6 */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */
/* jshint devel: true */
"use strict";

$(document).ready(function(){
  // opening and closing the form
  $(".btn-success").click(function(){
    $(".form-popup").toggle(500);
  });
  $(".btn-danger").click(function(){
    $(".form-popup").hide(500);
  });

  // adding the entered details to the table
  $(".btn-primary").click(function(event){
    event.preventDefault();

    let username = $("#username").val();
    let forename = $("#f-name").val();
    let surname = $("#s-name").val();
    let role = $("#role").val();

    let markup = "<tr><td>" + username + "</td><td>" + forename + "</td><td>" + surname + "</td><td>" + role + "</td></tr>";
    $("table tbody").append(markup);
  });
});
