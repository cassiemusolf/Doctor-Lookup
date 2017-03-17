(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "bc33b7280ac987793116d9fed0faacd6";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.findDoctor = function(medicalIssue, state) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=' + state + '&skip=0&limit=50&user_key=' + apiKey).then(function(response) {
    $('.search-count').text("There are " + response.meta.total + " doctors in " + state + " state that can help you with the medical issue " + medicalIssue + ". Here is a list of " + response.meta.count + " of them.");
    var doctorArray = [];
    for(var i=0; i<50; i ++) {
      doctorArray.push(response.data[i].practices[0].name + "<br>" + "Phone: " + response.data[i].practices[0].phones[0].number + "<br>" + "City: " + response.data[i].practices[0].visit_address.city);
    } for(var j=0; j<doctorArray.length; j++) {
      $('.search-result').append("<li>" + doctorArray[j] + "</li>");
  }
})
  .fail(function(error) {
    $('.search-result').text(error.responseJSON.message);
  });
};


exports.doctorModule = Doctor;

},{"./../.env":1}],3:[function(require,module,exports){
var Doctor = require('./../js/doctor.js').doctorModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  var currentDoctor = new Doctor();
  $("#find-doctor").submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#medical-issue').val();
    $('#medical-issue').val("");
    var state = $('#state').val();
    $('#state').val("");
    currentDoctor.findDoctor(medicalIssue, state);
  });
});

},{"./../.env":1,"./../js/doctor.js":2}]},{},[3]);
