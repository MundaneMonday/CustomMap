const express = require('express');
const routes = express.Router();
var axios = require('axios');

//fetches nearby clinics according to the provided coordinates
routes.get("/api/map/:lat/:lng", (req,res)=>{
    var config = {
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.params.lat}%2C${req.params.lng}&radius=15000&type=clinic&keyword=doctor&key=${process.env.GOOGLE_NEARBY_SERACH_API}`,
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
