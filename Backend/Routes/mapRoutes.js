const express = require('express');
const routes = express.Router();
var axios = require('axios');


routes.get("/api/map", (req,res,next)=>{
    var config = {
        method: 'get',
        url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyC2wMHrM8FI1xA8z-6VG2B6X-tzasCQShk',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        
        res.json(response.data.results)
      })
      .catch(function (error) {
        console.log(error);
      });
  
    
})

module.exports = routes;
