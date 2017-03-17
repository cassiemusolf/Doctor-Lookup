var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.findDoctor = function(medicalIssue, state) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=' + state + '&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
    $('.search-count').text("The number of doctors in "  + state + " state that can help you with the medical issue " + medicalIssue  + " is " + response.meta.total + ".");
    var doctorArray = [];
    for(var i=0; i<10; i ++) {
      doctorArray.push(response.data[i].practices[0].name + "<br>" + "Website: " + response.data[i].practices[0].website + "<br>" + "City: " + response.data[i].practices[0].visit_address.city);
    } for(var j=0; j<doctorArray.length; j++) {
      $('.search-result').append("<li>" + doctorArray[j] + "</li>");
  }
})
  .fail(function(error) {
    $('.search-result').text(error.responseJSON.message);
  });
};


exports.doctorModule = Doctor;
