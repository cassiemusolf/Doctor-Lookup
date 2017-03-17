var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.findDoctor = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
    var doctorArray = [];
    for(var i=0; i<3; i ++) {
      doctorArray.push(response.data[i].practices[0].name);
    } for(var j=0; j<doctorArray.length; j++) {
      $('.search-result').append("<li>" + doctorArray[j] + "</li>");
  } console.log(doctorArray[j]);
})
  .fail(function(error) {
    $('.search-result').text(error.responseJSON.message);
  });
};


exports.doctorModule = Doctor;
