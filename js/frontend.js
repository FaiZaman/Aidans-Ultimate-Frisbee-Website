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

  // validating most inputs
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
    else if (textId == "new-role"){
      let errorId = "role-error";
      let emptyId = "role-empty";
      validateInput(textId, errorId, emptyId);
    }
    else{
      validatePassword(textId);
    }
  });

  function validateInput(textId, errorId, emptyId){
    let input = $("#" + textId);
    const regex = /^[a-zA-Z ,.'-]+$/;
    let value = regex.test(input.val());
    if(!value){
      if (input.val() == ""){
        $("#" + emptyId).show(500).effect("shake");
      }
      else{
        $("#" + errorId).show(500).effect("shake");
      }
      $("#add-member-submit-button").addClass('disabled');
    }
    else{
      $("#" + emptyId).hide(500);
      $("#" + errorId).hide(500);
      $("#add-member-submit-button").removeClass('disabled');
    }
  }

  function validatePassword(textId){
    let input = $("#" + textId);
    const regex = /^.{6,}$/;
    let value = regex.test(input.val());
    if (!value){
      $("#password-len").show(500);
      $("#add-member-submit-button").addClass('disabled');
    }
    else{
      $("#password-len").hide(500);
      $("#add-member-submit-button").removeClass('disabled');
    }
  }

  $("#add-member-submit-button").on('submit', function(e){
    if ($(this).hasClass('disabled')){
      e.preventDefault();
    }
  });
});
