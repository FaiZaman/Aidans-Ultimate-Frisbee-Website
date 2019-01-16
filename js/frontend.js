/* jshint -W097 */
/* jshint esversion: 6 */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */
/* jshint devel: true */
"use strict";

$(document).ready(function(){
  $(".btn-success").click(function(){
    $(".form-popup").toggle(500);
  });
  $(".btn-danger").click(function(){
    $(".form-popup").hide(500);
  });
  $(".btn-primary").click(function(){
    let name = $("#name").val();
    let role = $("#role").val();
    let markup = "<tr><td>6</td><td>" + name + "</td><td>" + role + "</td></tr>";
    $("table tbody").append(markup);
    console.log($("tbody"));
  });
});
