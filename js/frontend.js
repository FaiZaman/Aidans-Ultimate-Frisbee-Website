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

  $(".form-data").on('input', function(){
    let textId = this.id;
    if (textId == "new-username"){
      let errorId = "username-error";
      let emptyId = "username-empty";
      validateInput(textId, errorId, emptyId);
    }
    else if (textId == "new-forename"){
      let errorId = "forename-error";
      let emptyId = "forename-empty";
      validateInput(textId, errorId, emptyId);
    }
    else if (textId == "new-surname"){
      let errorId = "surname-error";
      let emptyId = "surname-empty";
      validateInput(textId, errorId, emptyId);
    }
    else{
      let errorId = "role-error";
      let emptyId = "role-empty";
      validateInput(textId, errorId, emptyId);
    }
  });

  function validateInput(textId, errorId, emptyId){
    let input = $("#" + textId);
    let regex = /^[a-zA-Z ,.'-]+$/;
    let name = regex.test(input.val());
    if(!name){
      if (input.val() == ""){
        $("#" + emptyId).show(500);
      }
      else{
        $("#" + errorId).show(500);
      }
      $("#add-member-submit").addClass('disabled');
    }
    else{
      $("#" + emptyId).hide(500);
      $("#" + errorId).hide(500);
      $("#add-member-submit").removeClass('disabled');
    }
  }
});
