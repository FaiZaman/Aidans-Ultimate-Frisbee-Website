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
    $("#form-popup").toggle(500);
  });
  $(".btn-danger").click(function(){
    $("#form-popup").hide(500);
  });
});
