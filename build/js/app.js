(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "bc33b7280ac987793116d9fed0faacd6";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.findDoctor = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
    $('.search-count').text("The number of doctors that can help you with a " + medicalIssue + " is " + response.meta.count + ".");
    var doctorArray = [];
    for(var i=0; i<3; i ++) {
      doctorArray.push(response.data[i].practices[0]);
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
var displayDoctor = function(doctorArray) {
  $('.search-result').append("<li>" + doctorArray + "</li>");
};

$(document).ready(function() {
  var currentDoctor = new Doctor();
  $("#find-doctor").submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#medical-issue').val();
    currentDoctor.findDoctor(medicalIssue);
  });
});

},{"./../.env":1,"./../js/doctor.js":2}]},{},[3]);
