const axios = require("axios");

const questions = require("./../../index");

    axios //JUST GOT NEW API, STILL THROWING AN ERROR AND SAYING THAT IT IS NOT AUTHORIZED
      .get('https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyDTNJlFaj1Sjtp8RuIfFRGvaZXj0xTzPIg')
      .then(function(res) {
          console.log(questions);
      })
 
.catch(error => {
   console.log(error)
 });    
      



